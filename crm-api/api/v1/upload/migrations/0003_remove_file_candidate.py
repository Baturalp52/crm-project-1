# Generated by Django 4.0.2 on 2022-04-10 00:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('upload', '0002_alter_file_file'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='candidate',
        ),
    ]
