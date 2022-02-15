from django.db import models

from v1.hr_members.models import HRMember
from v1.tasks.models import Task


class Comment(models.Model):
    content = models.TextField()
    owner = models.ForeignKey(HRMember,blank=True)
    createdDate = models.DateField(auto_now_add=True,blank=True)
    task = models.ForeignKey(Task,blank=True)
