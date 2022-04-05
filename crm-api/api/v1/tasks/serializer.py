from api.v1.tasks.models import Task
from rest_framework import serializers

from api.v1.hr_members.serializer import HRMemberSerializer
from api.v1.comments.serializer import CommentSerializer


class TaskSerializer(serializers.ModelSerializer):
    assignedCandidate = serializers.PrimaryKeyRelatedField(read_only=True)
    assignedMember = HRMemberSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = "__all__"
