from django.db import models

from api.v1.hr_members.models import HRMember
from api.v1.tasks.models import Task


class Comment(models.Model):
    content = models.TextField()
    owner = models.ForeignKey(HRMember, on_delete=models.SET_NULL, null=True, related_name="owner")
    createdDate = models.DateField(auto_now_add=True, null=True)
    task = models.ForeignKey(Task, on_delete=models.SET_NULL, null=True, related_name="comments")
