# Generated by Django 4.0.2 on 2022-04-01 11:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('candidates', '0003_alter_candidate_departments_alter_candidate_diplomas_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='candidate',
            old_name='previousJobs',
            new_name='jobs',
        ),
    ]