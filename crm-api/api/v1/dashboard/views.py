from django.http import HttpResponse, JsonResponse


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
        members = HRMember.objects.filter(user_id=request.user.id)
        if not len(members) > 0:
            return HttpResponse(status=401)
        user = members[0]

        return JsonResponse(
            {
                "counts": {
                    "candidates": Candidate.objects.count(),
                    "companies": Company.objects.count(),
                    "tasks": Task.objects.count(),
                    "jobs": Job.objects.count(),
                    "events": Event.objects.filter(owner_id=user.id).count(),
                    "hrmembers": HRMember.objects.count(),
                }
            },
            safe=False,
        )
