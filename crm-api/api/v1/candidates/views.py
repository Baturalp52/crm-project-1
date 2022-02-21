from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.candidates.models import Candidate
from api.v1.candidates.serializer import CandidateSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class CandidatesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return JsonResponse(CandidateSerializer(Candidate.objects.all(), many=True).data, safe=False)

    def post(self, request):
        newCandidate = Candidate()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                if key == "mapsCoord":
                    setattr(newCandidate, key, value)
                else:
                    setattr(newCandidate, key + "_id", value["id"])
            elif not (key == "id"):
                setattr(newCandidate, key, value)
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
