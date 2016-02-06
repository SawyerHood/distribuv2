from .models import Video, Comment
from rest_framework import serializers


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'title', 'description', 'uploader', 'torrent_file', 'date', 'video_file')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'contents', 'poster', 'date', 'video')
