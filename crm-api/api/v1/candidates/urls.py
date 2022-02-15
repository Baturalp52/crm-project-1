from django.urls import path

from api.v1.candidates.views import index


urlpatterns = [path("",index)]