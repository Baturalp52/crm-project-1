from django.urls import path

from api.v1.comments.views import CommentsView


urlpatterns = [path("", CommentsView.as_view()), path("<int:id>", CommentsView.as_view())]
