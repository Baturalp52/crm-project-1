from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from api.v1.hr_members.models import HRMember
from api.v1.hr_members.serializer import HRMemberSerializer


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        if user.is_superuser:
            responseUser = {
                "name": user.username,
            }
        else:
            responseUser = HRMemberSerializer(HRMember.objects.filter(user_id=user.pk)[0]).data

        responseUser["isAdmin"] = user.is_superuser

        return Response(
            {
                "token": token.key,
                "user": responseUser,
            }
        )
