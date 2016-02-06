from django.db import models
from django.contrib.auth.models import User

class Video(models.Model):
    title = models.CharField(max_length=140)
    description = models.CharField(max_length=9999)
    uploader = models.ForeignKey(User, on_delete=models.CASCADE)
    video_file = models.FileField(upload_to='videos')
    torrent_file = models.FileField(upload_to='torrents', null=True)
    date = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    contents = models.CharField(max_length=999999)
    date = models.DateTimeField(auto_now=True)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
