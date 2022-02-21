from json import loads
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse

from api.v1.events.models import Event

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class EventsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return JsonResponse(list(Event.objects.all().values()), safe=False)

    def post(self, request):
        newEvent = Event()
        for key, value in loads(request.body).items():
            if not (key == "id"):
                setattr(newEvent, key, value)
        newEvent.save()
        return JsonResponse(list(Event.objects.all().values()), safe=False)

    def put(self, request, id):
        events = Event.objects.filter(id=id)
        if len(events) > 0:
            event = events[0]
            for key, value in loads(request.body).items():
                if not (key == "id"):
                    setattr(event, key, value)
            event.save()

            return JsonResponse(model_to_dict(event), safe=False)
        else:
            return HttpResponse(status=404)

    def delete(self, request, id):
        events = Event.objects.filter(id=id)
        if len(events) > 0:
            events[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
