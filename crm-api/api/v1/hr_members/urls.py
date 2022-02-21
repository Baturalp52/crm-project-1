from django.urls import path

from api.v1.hr_members.views import HRMembersView


urlpatterns = [path("", HRMembersView.as_view()), path("<int:id>", HRMembersView.as_view())]
