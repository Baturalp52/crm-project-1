from api.v1.events.models import Event
from rest_framework.serializers import ModelSerializer


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
