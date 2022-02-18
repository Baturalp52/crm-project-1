from api.v1.candidates.models import Candidate
from rest_framework import serializers

from api.v1.hr_members.serializer import HRMemberSerializer
from api.v1.jobs.serializer import JobSerializer


class CandidateSerializer(serializers.ModelSerializer):
    creatorMember = HRMemberSerializer(read_only=True)
    placedJob = JobSerializer(read_only=True)

    class Meta:
        model = Candidate
        fields = "__all__"
