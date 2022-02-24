from django.urls import path

from api.v1.users.views import UsersView


urlpatterns = [path("", UsersView.as_view())]
