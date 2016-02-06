from rest_framework import viewsets
from .models import Video, Comment
from .serializers import VideoSerializer, CommentSerializer

class VideoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    def pre_save(self, obj):
        obj.video_file = self.request.FILES.get('file')


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
