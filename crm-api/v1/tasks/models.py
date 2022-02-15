from django.db import models

from v1.candidates.models import Candidate
from v1.comments.models import Comment
from v1.hr_members.models import HRMember

class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    assignedMember = models.ForeignKey(HRMember,blank=True)
    assignedCandidate = models.ForeignKey(Candidate,blank=True)
    situation = models.CharField(max_length=255)
    createdDate = models.DateField(auto_now_add=True,blank=True)
    endDate = models.DateField(blank=True)