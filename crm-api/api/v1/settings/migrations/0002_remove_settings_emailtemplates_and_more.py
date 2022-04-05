# Generated by Django 4.0.2 on 2022-03-29 13:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='settings',
            name='emailTemplates',
        ),
        migrations.RemoveField(
            model_name='settings',
            name='smsTemplates',
        ),
        migrations.CreateModel(
            name='SMSTemplate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('template', models.TextField()),
                ('settings', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='settings.settings')),
            ],
        ),
        migrations.CreateModel(
            name='EmailTemplate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('template', models.TextField()),
                ('settings', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='settings.settings')),
            ],
        ),
    ]
