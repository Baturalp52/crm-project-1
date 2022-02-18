from json import loads
from django.forms import model_to_dict
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.hr_members.models import HRMember


@csrf_exempt
def get_or_create(request):
    if request.method == "GET":
        return JsonResponse(list(HRMember.objects.all().values()), safe=False)
    elif request.method == "POST":
        newHRMember = HRMember()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                pass
            elif key == "id":
                pass
            else:
                setattr(newHRMember, key, value)

        newHRMember.save()
        return JsonResponse(list(HRMember.objects.all().values()), safe=False)
    else:
        return HttpResponseNotAllowed()


@csrf_exempt
def update_or_delete(request, id):
    if request.method == "PUT":
        hr_members = HRMember.objects.filter(id=id)
        if len(hr_members) > 0:
            hr_member = hr_members[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    pass
                else:
                    setattr(hr_member, key, value)
            hr_member.save()

            return JsonResponse(model_to_dict(hr_member), safe=False)
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
