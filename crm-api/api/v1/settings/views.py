from django.http import JsonResponse, HttpResponse

from rest_framework.views import APIView

from api.v1.settings.models import Settings
from api.v1.settings.serializer import SettingsSerializer


class SettingsView(APIView):
    def get(self, request):
        if request.user.is_superuser:
            return JsonResponse(SettingsSerializer(Settings.objects.all()).data)
        return HttpResponse(status=401)

    def put(self, request):
        if request.user.is_superuser:
            return JsonResponse(SettingsSerializer(Settings.objects.all()[0]).data)
        return HttpResponse(status=401)
