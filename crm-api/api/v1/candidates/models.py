from django.db import models

from api.v1.hr_members.models import HRMember
from api.v1.jobs.models import Job


class Candidate(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    CVAddress = models.CharField(max_length=255)
    phoneNumbers = models.JSONField()
    emailAdresses = models.JSONField()
    address = models.TextField()
    extraAddress = models.TextField()
    zipCode = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    mapsCoord = models.JSONField()
    creatorMember = models.ForeignKey(HRMember, on_delete=models.SET_NULL, null=True, related_name="creatorMember")
    previousJobs = models.JSONField()
    skills = models.JSONField()
    comment = models.TextField()
    salaryExpectation = models.IntegerField()
    departments = models.JSONField()
    keywords = models.JSONField()
    diplomas = models.JSONField()
    placedJob = models.ForeignKey(Job, on_delete=models.SET_NULL, null=True, related_name="placedJob")
    situation = models.BooleanField(default=False)
