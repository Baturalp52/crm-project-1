# Generated by Django 4.0.2 on 2022-04-01 11:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('candidates', '0004_rename_previousjobs_candidate_jobs'),
    ]

    operations = [
        migrations.RenameField(
            model_name='candidate',
            old_name='situation',
            new_name='isPlaced',
        ),
    ]
