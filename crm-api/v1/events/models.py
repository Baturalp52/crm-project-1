from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=255)
    start = models.DateField()
    end = models.DateField()
    desc = models.TextField()
    allDay = models.BooleanField(default=False)

