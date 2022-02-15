from django.db import models

from v1.candidates.models import Candidate
from v1.tasks.models import Task

class HRMember (models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
