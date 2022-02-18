from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.companies.models import Company
from api.v1.companies.serializer import CompanySerializer


@csrf_exempt
def get_or_create(request):
    if request.method == "GET":
        return JsonResponse(CompanySerializer(Company.objects.all(), many=True).data, safe=False)
    elif request.method == "POST":
        newCompany = Company()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                pass
            elif key == "id":
                pass
            else:
                setattr(newCompany, key, value)

        newCompany.save()
        return JsonResponse(CompanySerializer(Company.objects.all(), many=True).data, safe=False)
    else:
        return HttpResponseNotAllowed()


@csrf_exempt
def update_or_delete(request, id):
    if request.method == "PUT":
        companies = Company.objects.filter(id=id)
        if len(companies) > 0:
            company = companies[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    pass
                else:
                    setattr(company, key, value)
            company.save()

            return JsonResponse(CompanySerializer(company).data, safe=False)
        else:
            return HttpResponse(status=404)

    elif request.method == "DELETE":
        companies = Company.objects.filter(id=id)
        if len(companies) > 0:
            companies[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseNotAllowed()
