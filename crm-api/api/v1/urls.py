
from django.urls import include, path

urlpatterns = [
    path('candidates/', include("api.v1.candidates.urls")),
    path('comments/',include("api.v1.comments.urls"))
]
