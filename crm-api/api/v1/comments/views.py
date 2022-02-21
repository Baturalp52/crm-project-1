from json import loads
from django.http import HttpResponse, JsonResponse

from api.v1.comments.models import Comment
from api.v1.comments.serializer import CommentSerializer


from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class CommentsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return JsonResponse(CommentSerializer(Comment.objects.all(), many=True).data, safe=False)

    def post(self, request):
        newComment = Comment()
        for key, value in loads(request.body).items():
            if type(value) is dict:
                setattr(newComment, key + "_id", value["id"])
            elif not (key == "id"):
                setattr(newComment, key, value)
        newComment.save()
        return JsonResponse(CommentSerializer(Comment.objects.all(), many=True).data, safe=False)

    def put(self, request, id):
        comments = Comment.objects.filter(id=id)
        if len(comments) > 0:
            comment = comments[0]
            for key, value in loads(request.body).items():
                if type(value) is dict:
                    setattr(comment, key + "_id", value["id"])
                elif not (key == "id"):
                    setattr(comment, key, value)
            comment.save()

            return JsonResponse(CommentSerializer(comment).data, safe=False)
        else:
            return HttpResponse(status=404)

    def delete(self, request, id):
        comments = Comment.objects.filter(id=id)
        if len(comments) > 0:
            comments[0].delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=404)
