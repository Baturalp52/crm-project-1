from django.urls import include, path

urlpatterns = [
    path("candidates/", include("api.v1.candidates.urls")),
    path("hr-members/", include("api.v1.hr_members.urls")),
    path("companies/", include("api.v1.companies.urls")),
    path("dashboard/", include("api.v1.dashboard.urls")),
    path("settings/", include("api.v1.settings.urls")),
    path("comments/", include("api.v1.comments.urls")),
    path("message/", include("api.v1.message.urls")),
    path("events/", include("api.v1.events.urls")),
    path("upload/", include("api.v1.upload.urls")),
    path("users/", include("api.v1.users.urls")),
    path("tasks/", include("api.v1.tasks.urls")),
    path("jobs/", include("api.v1.jobs.urls")),
    path("auth/", include("api.v1.auth.urls")),
]
