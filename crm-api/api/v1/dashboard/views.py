from django.http import JsonResponse


from api.v1.candidates.models import Candidate
from api.v1.companies.models import Company
from api.v1.tasks.models import Task
from api.v1.jobs.models import Job
from api.v1.events.models import Event
from api.v1.hr_members.models import HRMember


from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        return JsonResponse(
            {
                "counts": {
                    "candidates": Candidate.objects.count(),
                    "companies": Company.objects.count(),
                    "tasks": Task.objects.count(),
                    "jobs": Job.objects.count(),
                    "events": Event.objects.count(),
                    "hrmembers": HRMember.objects.count(),
                }
            },
            safe=False,
        )
