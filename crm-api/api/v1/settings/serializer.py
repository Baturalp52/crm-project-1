from rest_framework.serializers import ModelSerializer
from api.v1.settings.models import Settings, SMSTemplate, EmailTemplate


class SMSTemplateSerializer(ModelSerializer):
    class Meta:
        model = SMSTemplate
        fields = "__all__"


class EmailSerializer(ModelSerializer):
    class Meta:
        model = EmailTemplate
        fields = "__all__"


class SettingsSerializer(ModelSerializer):
    smsTemplate = SMSTemplateSerializer(read_only=True)
    emailTemplate = EmailSerializer(read_only=True)

    class Meta:
        model = Settings
        fields = "__all__"
