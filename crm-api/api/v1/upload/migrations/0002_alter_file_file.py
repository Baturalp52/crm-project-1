# Generated by Django 4.0.2 on 2022-04-10 00:44

import api.v1.upload.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('upload', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.FileField(upload_to=api.v1.upload.models.cvUploadTo),
        ),
    ]
