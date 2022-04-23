from django.urls import path

from api.v1.message.views import MessageView


urlpatterns = [path("<int:messageType>/", MessageView.as_view())]
