from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.tasks.models import Task
from api.v1.tasks.serializer import TaskSerializer


@csrf_exempt
def get_or_create(request):
    if request.method == "GET":
        return JsonResponse(TaskSerializer(Task.objects.all().values()).data, safe=False)
    elif request.method == "POST":
        newTask = Task()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                setattr(newTask, key + "_id", value["id"])
            elif not (key == "id"):
                setattr(newTask, key, value)

        newTask.save()
        return JsonResponse(TaskSerializer(Task.objects.all().values()).data, safe=False)
    else:
        return HttpResponseNotAllowed()


@csrf_exempt
def update_or_delete(request, id):
    if request.method == "PUT":
        tasks = Task.objects.filter(id=id)
        if len(tasks) > 0:
            task = tasks[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    setattr(task, key + "_id", value["id"])
                elif not (key == "id"):
                    setattr(task, key, value)
            task.save()

            return JsonResponse(TaskSerializer(task).data, safe=False)
        else:
            return HttpResponse(status=404)

    elif request.method == "DELETE":
        tasks = Task.objects.filter(id=id)
        if len(tasks) > 0:
            tasks[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseNotAllowed()
