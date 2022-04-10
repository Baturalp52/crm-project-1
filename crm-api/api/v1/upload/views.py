from json import loads
from django.http import HttpResponse, JsonResponse

from api.v1.upload.models import File
from api.v1.upload.serializer import FileSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class UploadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        newFile = File()
        newFile.file = request.FILES.get("CVFile")
        newFile.save()

        return HttpResponse(newFile.file.url)
