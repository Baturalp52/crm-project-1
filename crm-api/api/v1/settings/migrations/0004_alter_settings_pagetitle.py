# Generated by Django 4.0.2 on 2022-03-29 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0003_settings_pagetitle'),
    ]

    operations = [
        migrations.AlterField(
            model_name='settings',
            name='pageTitle',
            field=models.TextField(null=True),
        ),
    ]
