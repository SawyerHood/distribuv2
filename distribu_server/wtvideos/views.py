from rest_framework import viewsets
from .models import Video, Comment
from .serializers import VideoSerializer, CommentSerializer, UserSerializer, VideoUploadSerializer
from rest_framework.parsers import FormParser, MultiPartParser
from django.contrib.auth.models import User
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework import status

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
        import pdb; pdb.set_trace()
        if(serializer.is_valid()):
            serializer.save()
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
