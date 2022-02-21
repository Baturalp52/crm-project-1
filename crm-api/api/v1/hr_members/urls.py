from django.urls import path

from api.v1.hr_members.views import View


urlpatterns = [path("", View.as_view()), path("<int:id>", View.as_view())]
