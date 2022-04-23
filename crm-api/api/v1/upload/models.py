from django.db import models
from hashlib import sha256
from django.conf import settings


def cvUploadTo(instance, filename):

    fn = sha256(filename.encode()).hexdigest() + "." + filename.split(".")[-1]
    return f"cv-files/{fn}"


class File(models.Model):
    file = models.FileField(upload_to=cvUploadTo)
