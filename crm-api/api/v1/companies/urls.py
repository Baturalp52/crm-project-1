from django.urls import path

from api.v1.companies.views import CompaniesView


urlpatterns = [path("", CompaniesView.as_view()), path("<int:id>", CompaniesView.as_view())]
