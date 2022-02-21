from django.urls import include, path

urlpatterns = [
    path("candidates/", include("api.v1.candidates.urls")),
    path("comments/", include("api.v1.comments.urls")),
    path("companies/", include("api.v1.companies.urls")),
    path("events/", include("api.v1.events.urls")),
    path("hr-members/", include("api.v1.hr_members.urls")),
    path("jobs/", include("api.v1.jobs.urls")),
    path("tasks/", include("api.v1.tasks.urls")),
    path("auth/", include("api.v1.auth.urls")),
]
