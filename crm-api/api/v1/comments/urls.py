from django.urls import path

from api.v1.comments.views import get_or_create
from api.v1.comments.views import update_or_delete


urlpatterns = [path("",get_or_create),
path("<int:id>",update_or_delete)]