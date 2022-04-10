from django.urls import path

from api.v1.upload.views import UploadView


urlpatterns = [path("", UploadView.as_view()), path("<int:id>", UploadView.as_view())]
