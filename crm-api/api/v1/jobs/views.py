from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.jobs.models import Job
from api.v1.jobs.serializer import JobSerializer


@csrf_exempt
def get_or_create(request):
    if request.method == "GET":
        return JsonResponse(JobSerializer(Job.objects.all(), many=True), safe=False)
    elif request.method == "POST":
        newJob = Job()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                pass
            elif key == "id":
                pass
            else:
                setattr(newJob, key, value)

        newJob.save()
        return JsonResponse(JobSerializer(Job.objects.all(), many=True), safe=False)
    else:
        return HttpResponseNotAllowed()


@csrf_exempt
def update_or_delete(request, id):
    if request.method == "PUT":
        jobs = Job.objects.filter(id=id)
        if len(jobs) > 0:
            job = jobs[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    pass
                else:
                    setattr(job, key, value)
            job.save()

            return JsonResponse(JobSerializer(job), safe=False)
        else:
            return HttpResponse(status=404)

    elif request.method == "DELETE":
        jobs = Job.objects.filter(id=id)
        if len(jobs) > 0:
            jobs[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseNotAllowed()
