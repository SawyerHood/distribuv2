from rest_framework import viewsets
from .models import Video, Comment
from .serializers import VideoSerializer, CommentSerializer, UserSerializer, VideoUploadSerializer
from rest_framework.parsers import FormParser, MultiPartParser
from django.contrib.auth.models import User
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework import status
from django.core.files import File
from django.conf import settings
import subprocess


def create_torrent(video):
    webseed = "http://" + settings.BASE_URL + video.video_file.url
    res = subprocess.call([
        "buildtorrent",
        "-a",
        "udp://tracker.openbittorrent.com:80",
        "-w",
        webseed,
        video.video_file.path,
        "/tmp/out.torrent"
    ])
    if res != 0:
        raise Exception("File not created.")
    f = open("/tmp/out.torrent", "rb")
    torrent = File(f)
    video.torrent_file = torrent
    video.save()

class VideoViewSet(viewsets.ModelViewSet):
    parser_classes = (FormParser, MultiPartParser, )
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    def create(self, request):
        data = request.data
        serializer = VideoUploadSerializer(data=data)
        if(serializer.is_valid()):
            video = serializer.save()
            create_torrent(video)
            return Response({'status':'video uploaded'})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
