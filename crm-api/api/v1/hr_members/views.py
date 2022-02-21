from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User

from api.v1.hr_members.models import HRMember
from api.v1.hr_members.serializer import HRMemberSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class View(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        print(request.user)
        if request.method == "GET":
            return JsonResponse(HRMemberSerializer(HRMember.objects.all(), many=True).data, safe=False)

    def post(self, request):
        body = loads(request.body)
        newHRMember = HRMember()
        for key, value in body.items():
            if not (key in ["id", "username", "password"]):
                setattr(newHRMember, key, value)
        user = User.objects.create_user(username=body["username"], email="", password=body["password"])
        newHRMember.user = user
        newHRMember.save()
        return JsonResponse(HRMemberSerializer(HRMember.objects.all(), many=True).data, safe=False)

    def put(self, request, id):
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

    def delete(self, request, id):
        hr_members = HRMember.objects.filter(id=id)
        if len(hr_members) > 0:
            hr_members[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
