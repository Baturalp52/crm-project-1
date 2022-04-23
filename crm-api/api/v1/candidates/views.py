from json import loads
import os

from django.conf import settings

from django.http import HttpResponse, JsonResponse

from api.v1.candidates.models import Candidate
from api.v1.candidates.serializer import CandidateSerializer

from api.v1.upload.models import File

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class CandidatesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return JsonResponse(CandidateSerializer(Candidate.objects.all(), many=True).data, safe=False)

    def post(self, request):
        newCandidate = Candidate()

        for key, value in loads(request.body).items():
            if key == "CVFile":
                pass
            elif type(value) is dict:
                if key == "mapsCoord":
                    setattr(newCandidate, key, value)
                else:
                    setattr(newCandidate, key + "_id", value["id"])
            elif not (key == "id"):
                setattr(newCandidate, key, value)
        newCandidate.creatorMember = request.user.hr_member
        newCandidate.save()
        return JsonResponse(CandidateSerializer(Candidate.objects.all(), many=True).data, safe=False)

    def put(self, request, id):
        candidates = Candidate.objects.filter(id=id)
        if len(candidates) > 0:
            candidate = candidates[0]

            for key, value in loads(request.body).items():
                if type(value) is dict:
                    if key == "mapsCoord":
                        setattr(candidate, key, value)
                    elif not (key == "id"):
                        setattr(candidate, key + "_id", value["id"])
                elif key == "CVAddress":
                    oldAddress = candidate.CVAddress.replace("/contents/", "") if candidate.CVAddress else ""
                    files = File.objects.filter(file=oldAddress)
                    if not oldAddress == value and len(files) > 0:
                        file = files.first()
                        file.delete()
                        os.remove(os.path.join(settings.MEDIA_ROOT, file.file.name))

                    candidate.CVAddress = value

                elif not (key == "id"):
                    setattr(candidate, key, value)
            candidate.save()

            return JsonResponse(CandidateSerializer(candidate).data, safe=False)
        else:
            return HttpResponse(status=404)

    def delete(self, request, id):
        candidates = Candidate.objects.filter(id=id)
        if len(candidates) > 0:
            candidates[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
