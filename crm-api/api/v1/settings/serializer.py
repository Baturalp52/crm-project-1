from rest_framework.serializers import ModelSerializer
from api.v1.settings.models import Settings, MessageTemplate


class MessageTemplateSerializer(ModelSerializer):
    class Meta:
        model = MessageTemplate
        fields = "__all__"


class SettingsSerializer(ModelSerializer):
    messageTemplate = MessageTemplateSerializer(read_only=True, many=True)

    class Meta:
        model = Settings
        fields = "__all__"
