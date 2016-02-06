from rest_framework import viewsets
from .models import Video, Comment
from .serializers import VideoSerializer, CommentSerializer
from rest_framework.parsers import FileUploadParser, MultiPartParser

class VideoViewSet(viewsets.ModelViewSet):
    parser_classes = (FileUploadParser, MultiPartParser)
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Video.objects.all()
    serializer_class = VideoSerializer



class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
