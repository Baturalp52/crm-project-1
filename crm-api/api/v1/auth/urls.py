from django.urls import path
from api.v1.auth.views import LoginView

urlpatterns = [path("login", LoginView.as_view())]
