# Generated by Django 4.0.2 on 2022-02-27 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_alter_event_end_alter_event_start'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]