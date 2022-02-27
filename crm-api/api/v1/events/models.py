from django.db import models
from api.v1.hr_members.models import HRMember


class Event(models.Model):
    title = models.CharField(max_length=255)
    start = models.DateTimeField()
    end = models.DateTimeField(blank=True, null=True)
    desc = models.TextField()
    allDay = models.BooleanField(default=False)
    owner = models.ForeignKey(HRMember, on_delete=models.SET_NULL, null=True, related_name="events")
