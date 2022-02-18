
from django.urls import include, path

urlpatterns = [
    path('candidates/', include("api.v1.candidates.urls")),
]
