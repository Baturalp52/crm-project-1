from api.v1.companies.serializer import CompanySerializer
from api.v1.jobs.models import Job
from rest_framework import serializers


class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)

    class Meta:
        model = Job
        fields = "__all__"
