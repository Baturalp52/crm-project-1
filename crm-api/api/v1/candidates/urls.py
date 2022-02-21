from django.urls import path

from api.v1.candidates.views import CandidatesView


urlpatterns = [path("", CandidatesView.as_view()), path("<int:id>", CandidatesView.as_view())]
