from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    mapsCoord = models.JSONField()
    address = models.TextField(blank=True)
    city = models.CharField(max_length=255, blank=True)
    sector = models.CharField(max_length=255, blank=True)
    clientReference = models.CharField(max_length=255, blank=True)
    contact = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=255, blank=True)
    mail = models.CharField(max_length=255, blank=True)
    region = models.CharField(max_length=255, blank=True)
    website = models.CharField(max_length=255, blank=True)
