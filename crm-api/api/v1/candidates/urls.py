from django.urls import path

from api.v1.candidates.views import get_or_create
from api.v1.candidates.views import update


urlpatterns = [path("",get_or_create),
path("<int:id>",update)]