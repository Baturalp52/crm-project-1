from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.companies.models import Company
from api.v1.companies.serializer import CompanySerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class CompaniesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return JsonResponse(CompanySerializer(Company.objects.all(), many=True).data, safe=False)

    def post(self, request):
        newCompany = Company()
        for key, value in loads(request.body).items():
            if not (key == "id"):
                setattr(newCompany, key, value)

        newCompany.save()
        return JsonResponse(CompanySerializer(Company.objects.all(), many=True).data, safe=False)

    def put(self, request, id):
        companies = Company.objects.filter(id=id)
        if len(companies) > 0:
            company = companies[0]
            for key, value in loads(request.body).items():
                if not (key == "id"):
                    setattr(company, key, value)
            company.save()

            return JsonResponse(CompanySerializer(company).data, safe=False)
        else:
            return HttpResponse(status=404)

    def delete(self, request, id):
        companies = Company.objects.filter(id=id)
        if len(companies) > 0:
            companies[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
