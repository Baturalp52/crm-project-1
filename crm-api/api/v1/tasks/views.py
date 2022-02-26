from json import loads
from unicodedata import name
from django.http import HttpResponse, JsonResponse

from api.v1.tasks.models import Task
from api.v1.tasks.serializer import TaskSerializer

from api.v1.comments.models import Comment
from api.v1.hr_members.models import HRMember
from django.contrib.auth.models import User

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class TasksView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return JsonResponse(TaskSerializer(Task.objects.all(), many=True).data, safe=False)

    def post(self, request):
        newTask = Task()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                if value["id"]:
                    setattr(newTask, key + "_id", value["id"])

            elif key == "comments":
                pass
            elif not (key == "id"):
                setattr(newTask, key, value)

        newTask.save()
        for comment in loads(request.body)["comments"]:
            comment["task"] = newTask
            owner = HRMember.objects.filter(user_id=request.user.id)[0]
            comment["owner_id"] = owner.id
            del comment["createdDate"]
            del comment["id"]
            Comment(**comment).save()
        return JsonResponse(TaskSerializer(Task.objects.all(), many=True).data, safe=False)

    def put(self, request, id):
        tasks = Task.objects.filter(id=id)
        if len(tasks) > 0:
            task = tasks[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    setattr(task, key + "_id", value["id"])
                elif key == "comments":
                    for comment in value:
                        if comment["id"] == 0:
                            comment["task_id"] = id
                            owner = HRMember.objects.filter(user_id=request.user.id)[0]
                            comment["owner"] = owner
                            del comment["owner"]
                            del comment["task"]
                            del comment["id"]
                            com = Comment(**comment)
                            com.save()

                elif not (key == "id"):
                    setattr(task, key, value)
            task.save()

            return JsonResponse(TaskSerializer(task).data, safe=False)
        else:
            return HttpResponse(status=404)

    def delete(self, request, id):
        tasks = Task.objects.filter(id=id)
        if len(tasks) > 0:
            tasks[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
