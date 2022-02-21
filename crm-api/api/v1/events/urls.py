from django.urls import path

from api.v1.events.views import EventsView


urlpatterns = [path("", EventsView.as_view()), path("<int:id>", EventsView.as_view())]
