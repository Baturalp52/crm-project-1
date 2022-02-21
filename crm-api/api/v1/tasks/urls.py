from django.urls import path

from api.v1.tasks.views import TasksView


urlpatterns = [path("", TasksView.as_view()), path("<int:id>", TasksView.as_view())]
