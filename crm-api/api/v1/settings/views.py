from json import loads
from django.http import JsonResponse, HttpResponse

from rest_framework.views import APIView

from api.v1.settings.models import Settings, MessageTemplate
from api.v1.settings.serializer import SettingsSerializer, MessageTemplateSerializer


class SettingsView(APIView):
    def get(self, request):
        if request.user.is_superuser:
            settings = Settings.objects.get_or_create()
            return JsonResponse(SettingsSerializer(settings).data)
        return HttpResponse(status=401)


class MessageTemplatesView(APIView):
    def get(self, request):
        if request.user.is_superuser:
            try:
                templateType = request.query_params.get("type")[0]

                return JsonResponse(
                    MessageTemplateSerializer(
                        MessageTemplate.objects.filter(type=int(templateType)),
                        many=True,
                    ).data,
                    safe=False,
                )
            except:
                return HttpResponse(status=402)
        return HttpResponse(status=401)

    def post(self, request, templateType):
        if request.user.is_superuser:
            body = loads(request.body)

            newTemplate = MessageTemplate()
            for key, value in body.items():
                setattr(newTemplate, key, value)
            newTemplate.settings = Settings.objects.all()[0]
            newTemplate.save()
            return HttpResponse(status=201)
        else:
            return HttpResponse(status=401)

    def put(self, request, templateType, templateId):
        templates = MessageTemplate.objects.filter(id=templateId, type=templateType)
        if len(templates) > 0:
            template = templates[0]
            for key, value in loads(request.body).items():
                if not (key in ["id", "settings"]):
                    setattr(template, key, value)
            template.save()

            return HttpResponse(status=201)
        else:
            return HttpResponse(status=404)
