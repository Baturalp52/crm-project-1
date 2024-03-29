# Generated by Django 4.0.2 on 2022-04-04 19:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hr_members', '0003_alter_hrmember_user'),
        ('candidates', '0007_candidate_mobility'),
        ('tasks', '0004_alter_task_assignedcandidate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='assignedCandidate',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tasks', to='candidates.candidate'),
        ),
        migrations.AlterField(
            model_name='task',
            name='assignedMember',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tasks', to='hr_members.hrmember'),
        ),
    ]
