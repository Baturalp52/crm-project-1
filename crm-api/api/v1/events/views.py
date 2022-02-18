from json import loads
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.events.models import Event


@csrf_exempt
def get_or_create(request):
    if request.method == "GET":
        return JsonResponse(list(Event.objects.all().values()), safe=False)
    elif request.method == "POST":
        newEvent = Event()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                pass
            elif key == "id":
                pass
            else:
                setattr(newEvent, key, value)

        newEvent.save()
        return JsonResponse(list(Event.objects.all().values()), safe=False)
    else:
        return HttpResponseNotAllowed()


@csrf_exempt
def update_or_delete(request, id):
    if request.method == "PUT":
        events = Event.objects.filter(id=id)
        if len(events) > 0:
            candidate = events[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    pass
                else:
                    setattr(candidate, key, value)
            candidate.save()

            return JsonResponse(model_to_dict(candidate), safe=False)
        else:
            return HttpResponse(status=404)

    elif request.method == "DELETE":
        events = Event.objects.filter(id=id)
        if len(events) > 0:
            events[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseNotAllowed()
