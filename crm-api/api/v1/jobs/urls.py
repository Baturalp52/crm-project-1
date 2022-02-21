from django.urls import path

from api.v1.jobs.views import JobsView


urlpatterns = [path("", JobsView.as_view()), path("<int:id>", JobsView.as_view())]
