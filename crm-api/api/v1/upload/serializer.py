from api.v1.tasks.models import Task
from rest_framework import serializers


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"
