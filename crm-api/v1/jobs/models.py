from django.db import models

from v1.companies.models import Company


class Job (models.Model):
    name = models.CharField(max_length=255)
    experience = models.IntegerField(blank=True)
    salaryExpectation = models.IntegerField(blank=True)
    studyFields = models.JSONField()
    company = models.ForeignKey(Company)