from django.db import models

from api.v1.hr_members.models import HRMember
from api.v1.jobs.models import Job

from hashlib import sha256


def cvUploadTo(instance, filename):
    fn = sha256(filename.encode()).hexdigest()
    return f"/content/{instance.user.id}/{fn}"


class Candidate(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    CVAddress = models.TextField(null=True)
    phoneNumbers = models.JSONField(null=True)
    emailAdresses = models.JSONField(null=True)
    address = models.TextField()
    extraAddress = models.TextField()
    zipCode = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    mapsCoord = models.JSONField(null=True)
    creatorMember = models.ForeignKey(HRMember, on_delete=models.SET_NULL, null=True, related_name="creatorMember")
    jobs = models.JSONField(null=True)
    skills = models.JSONField(null=True)
    mobility = models.JSONField(null=True)
    comment = models.TextField()
    salaryExpectation = models.IntegerField()
    departments = models.JSONField(null=True)
    keywords = models.JSONField(null=True)
    diplomas = models.JSONField(null=True)
    placedJob = models.ForeignKey(Job, on_delete=models.SET_NULL, null=True, related_name="placedJob")
    situation = models.BooleanField(default=False)
