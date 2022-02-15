from django.db import models

from v1.hr_members.models import HRMember
from v1.jobs.models import Job

class Candidate(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    CVAddress = models.CharField(max_length=255)
    phoneNumbers = models.JSONField()
    emailAdresses = models.JSONField()
    address = models.TextField()
    extraAddress = models.TextField()
    zipCode = models.CharField()
    city = models.CharField()
    country = models.CharField()
    mapsCoord = models.JSONField()
    creatorMember = models.ForeignKey(HRMember)
    previousJobs = models.JSONField()
    skills = models.JSONField()
    comment = models.TextField()
    salaryExpectation = models.IntegerField()
    departments = models.JSONField()
    keywords = models.JSONField()
    diplomas = models.JSONField()
    placedJob = models.ForeignKey(Job,blank=True)
    situation = models.BooleanField(default=False)
