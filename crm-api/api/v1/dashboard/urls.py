from django.urls import path

from api.v1.dashboard.views import DashboardView


urlpatterns = [path("", DashboardView.as_view())]
