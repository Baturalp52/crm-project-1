from django.urls import path

from api.v1.settings.views import SettingsView, MessageTemplatesView


urlpatterns = [
    path("", SettingsView.as_view()),
    path("templates/<int:templateType>/<int:templateId>/", MessageTemplatesView.as_view()),
    path("templates/<int:templateType>/", MessageTemplatesView.as_view()),
    path("templates", MessageTemplatesView.as_view()),
]
