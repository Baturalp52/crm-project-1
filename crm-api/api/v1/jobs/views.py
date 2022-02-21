from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.jobs.models import Job
from api.v1.jobs.serializer import JobSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class JobsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return JsonResponse(JobSerializer(Job.objects.all(), many=True).data, safe=False)

    def post(self, request):
        newJob = Job()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                setattr(newJob, key + "_id", value["id"])
            elif not (key == "id"):
                setattr(newJob, key, value)

        newJob.save()
        return JsonResponse(JobSerializer(Job.objects.all(), many=True).data, safe=False)

    def put(self, request, id):
        jobs = Job.objects.filter(id=id)
        if len(jobs) > 0:
            job = jobs[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    setattr(job, key + "_id", value["id"])
                elif not (key == "id"):
                    setattr(job, key, value)
            job.save()

            return JsonResponse(JobSerializer(job).data, safe=False)
        else:
            return HttpResponse(status=404)

    def delete(self, request, id):
        jobs = Job.objects.filter(id=id)
        if len(jobs) > 0:
            jobs[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
