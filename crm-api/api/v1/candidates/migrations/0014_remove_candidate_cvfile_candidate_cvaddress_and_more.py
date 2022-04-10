# Generated by Django 4.0.2 on 2022-04-10 00:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_alter_job_company'),
        ('hr_members', '0003_alter_hrmember_user'),
        ('candidates', '0013_alter_candidate_name_alter_candidate_surname'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidate',
            name='CVFile',
        ),
        migrations.AddField(
            model_name='candidate',
            name='CVAddress',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='address',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='city',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='comment',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='country',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='creatorMember',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='creatorMember', to='hr_members.hrmember'),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='departments',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='diplomas',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='emailAdresses',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='extraAddress',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='jobs',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='keywords',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='mapsCoord',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='mobility',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='name',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='phoneNumbers',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='placedJob',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='placedJob', to='jobs.job'),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='salaryExpectation',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='skills',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='surname',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='zipCode',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
