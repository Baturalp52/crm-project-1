from api.v1.hr_members.models import HRMember
from rest_framework import serializers


class HRMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = HRMember
        fields = "__all__"
