from django.db import models

import api.v1.candidates.models as CandidatesModels
import api.v1.hr_members.models as HRModels

class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    assignedMember = models.ForeignKey(HRModels.HRMember,on_delete=models.SET_NULL,null=True)
    assignedCandidate = models.ForeignKey(CandidatesModels.Candidate,on_delete=models.SET_NULL,null=True)
    situation = models.CharField(max_length=255)
    createdDate = models.DateField(auto_now_add=True,null=True)
    endDate = models.DateField(null=True)