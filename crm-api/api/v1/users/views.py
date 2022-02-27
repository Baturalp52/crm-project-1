from django.http import JsonResponse

from api.v1.candidates.models import Candidate
from api.v1.candidates.serializer import CandidateSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from api.v1.hr_members.models import HRMember
from api.v1.hr_members.serializer import HRMemberSerializer


class UsersView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        responseUser = HRMemberSerializer(user.hr_member).data

        responseUser["isAdmin"] = user.is_superuser
        responseUser["username"] = user.username

        return JsonResponse(
            {
                "user": responseUser,
            }
        )
