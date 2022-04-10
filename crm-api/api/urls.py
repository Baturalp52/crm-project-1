from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("api/v1/", include("api.v1.urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
