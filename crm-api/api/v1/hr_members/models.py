from django.db import models
from django.contrib.auth.models import User


class HRMember(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user", null=True)
