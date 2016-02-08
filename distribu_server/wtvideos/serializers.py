from .models import Video, Comment
from rest_framework import serializers
from django.contrib.auth.models import User

# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

class VideoSerializer(serializers.ModelSerializer):
    uploader = UserSerializer(read_only=True)

    class Meta:
        model = Video
        fields = ('id', 'title', 'description', 'uploader', 'torrent_file', 'date', 'video_file')

class VideoUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'title', 'description', 'uploader', 'torrent_file', 'date', 'video_file')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'contents', 'poster', 'date', 'video')
