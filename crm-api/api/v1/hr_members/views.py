from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.hr_members.models import HRMember
from api.v1.hr_members.serializer import HRMemberSerializer


@csrf_exempt
def get_or_create(request):
    if request.method == "GET":
        return JsonResponse(HRMemberSerializer(HRMember.objects.all(), many=True).data, safe=False)
    elif request.method == "POST":
        newHRMember = HRMember()
        for key, value in loads(request.body).items():
            if not (key == "id"):
                setattr(newHRMember, key, value)

        newHRMember.save()
        return JsonResponse(HRMemberSerializer(HRMember.objects.all(), many=True).data, safe=False)
    else:
        return HttpResponseNotAllowed()


@csrf_exempt
def update_or_delete(request, id):
    if request.method == "PUT":
        hr_members = HRMember.objects.filter(id=id)
        if len(hr_members) > 0:
            hr_member = hr_members[0]
            for key, value in loads(request.body).items():
                if not (key == "id"):
                    setattr(hr_member, key, value)
            hr_member.save()

            return JsonResponse(HRMemberSerializer(hr_member).data, safe=False)
        else:
            return HttpResponse(status=404)

    elif request.method == "DELETE":
        hr_members = HRMember.objects.filter(id=id)
        if len(hr_members) > 0:
            hr_members[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseNotAllowed()
