from django.db import models

from api.v1.companies.models import Company


class Job (models.Model):
    name = models.CharField(max_length=255)
    experience = models.IntegerField(null=True)
    salaryExpectation = models.IntegerField(null=True)
    studyFields = models.JSONField()
    company = models.ForeignKey(Company,on_delete=models.SET_NULL,null=True,related_name="company")