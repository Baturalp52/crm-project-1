from api.v1.comments.models import Comment
from rest_framework import serializers

from api.v1.hr_members.serializer import HRMemberSerializer


class CommentSerializer(serializers.ModelSerializer):
    owner = HRMemberSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"
