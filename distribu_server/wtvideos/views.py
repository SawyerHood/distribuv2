from rest_framework import viewsets
from .models import Video, Comment
from .serializers import VideoSerializer, CommentSerializer, UserSerializer
from rest_framework.parsers import FormParser, MultiPartParser
from django.contrib.auth.models import User

class VideoViewSet(viewsets.ModelViewSet):
    parser_classes = (FormParser, MultiPartParser, )
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

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
