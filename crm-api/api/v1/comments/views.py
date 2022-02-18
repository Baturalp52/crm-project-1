from json import loads
from django.http import HttpResponse, JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

from api.v1.comments.models import Comment
from api.v1.comments.serializer import CommentSerializer


@csrf_exempt
def get_or_create(request):
    if request.method == "GET":
        return JsonResponse(CommentSerializer(Comment.objects.all(), many=True).data, safe=False)
    elif request.method == "POST":
        newComment = Comment()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                pass
            elif key == "id":
                pass
            else:
                setattr(newComment, key, value)

        newComment.save()
        return JsonResponse(CommentSerializer(Comment.objects.all(), many=True).data, safe=False)
    else:
        return HttpResponseNotAllowed()


@csrf_exempt
def update_or_delete(request, id):
    if request.method == "PUT":
        comments = Comment.objects.filter(id=id)
        if len(comments) > 0:
            comment = comments[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    pass
                else:
                    setattr(comment, key, value)
            comment.save()

            return JsonResponse(CommentSerializer(comment).data, safe=False)
        else:
            return HttpResponse(status=404)

    elif request.method == "DELETE":
        comments = Comment.objects.filter(id=id)
        if len(comments) > 0:
            comments[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
    else:
        return HttpResponseNotAllowed()
