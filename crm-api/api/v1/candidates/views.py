from json import loads
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.v1.candidates.models import Candidate

@csrf_exempt
def index(request):
    if request.method == "GET":
        return JsonResponse(list(Candidate.objects.all().values()),safe=False)
    elif request.method == "POST":
        newCandidate = Candidate()
        newCandidate.mapsCoord = {}
        for key,value in loads(request.body).items():
            if type(value) is dict:
                pass
            else:
                setattr(newCandidate,key,value)
        
        newCandidate.save()
        return HttpResponse(Candidate.objects.all())
    else:
        return HttpResponse()