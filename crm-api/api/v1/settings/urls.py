from django.urls import path

from api.v1.settings.views import SettingsView


urlpatterns = [path("", SettingsView.as_view())]
