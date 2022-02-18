from api.v1.tasks.models import Task
from rest_framework import serializers

from api.v1.candidates.serializer import CandidateSerializer
from api.v1.hr_members.serializer import HRMemberSerializer


class TaskSerializer(serializers.ModelSerializer):
    assignedCandidate = CandidateSerializer(read_only=True)
    assignedMember = HRMemberSerializer(read_only=True)

    class Meta:
        model = Task
        fields = "__all__"
