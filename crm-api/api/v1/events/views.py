from json import loads
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse

from api.v1.events.models import Event
from api.v1.events.serializers import EventSerializer

from api.v1.hr_members.models import HRMember

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class EventsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        members = HRMember.objects.filter(user_id=request.user.id)
        if not len(members) > 0:
            return HttpResponse(status=401)
        return JsonResponse(EventSerializer(Event.objects.filter(owner_id=members[0].id), many=True).data, safe=False)

    def post(self, request):
        members = HRMember.objects.filter(user_id=request.user.id)
        if not len(members) > 0:
            return HttpResponse(status=401)
        newEvent = Event()
        for key, value in loads(request.body).items():
            if not (key == "id"):
                setattr(newEvent, key, value)

        newEvent.owner = members[0]
        newEvent.save()
        return JsonResponse(EventSerializer(Event.objects.all(), many=True).data, safe=False)

    def put(self, request, id):
        members = HRMember.objects.filter(user_id=request.user.id)
        if not len(members) > 0:
            return HttpResponse(status=401)
        events = Event.objects.filter(id=id)
        if len(events) > 0:
            event = events[0]
            for key, value in loads(request.body).items():
                if not (key == "id" or key == "owner"):
                    setattr(event, key, value)
            event.save()

            return JsonResponse(EventSerializer(event).data, safe=False)
        else:
            return HttpResponse(status=404)

    def delete(self, request, id):
        events = Event.objects.filter(id=id)
        if len(events) > 0:
            events[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
