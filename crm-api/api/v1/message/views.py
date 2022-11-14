from mailjet_rest import Client


from json import loads, dumps
from django.http import HttpResponse
from requests import Session

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from simplejson import load

import os


class MessageView(APIView):
    permission_classes = [IsAuthenticated]
    mail_api_key = os.environ.get('MAIL_API_KEY')
    mail_api_secret = os.environ.get('MAIL_API_SECRET')
    mailjet = Client(auth=(mail_api_key, mail_api_secret), version="v3.1")
    smsToken = os.environ.get('SMS_TOKEN')
    smsSession = Session()

    def send_mail(self, mailAddress, name, text, subject):
        message = {
            "Messages": [
                {
                    "From": {"Email": "globaljobfrance@gmail.com", "Name": "Global Job"},
                    "To": [{"Email": mailAddress, "Name": name}],
                    "Subject": subject,
                    "TextPart": text,
                }
            ]
        }
        result = self.mailjet.send.create(data=message)
        return result.status_code

    def send_sms(self, phoneNumber, text):
        data = {"From": "InfoSMS", "To": phoneNumber, "Text": text}
        request = self.smsSession.post(
            url="https://api.mailjet.com/v4/sms-send",
            data=dumps(data),
            headers={"Authorization": f"Bearer {self.smsToken}"},
        )
        return request.status_code

    def post(self, request, messageType):
        if messageType == 1:
            data = loads(request.body)
            status = self.send_sms(data["address"], data["message"])
            return HttpResponse(status=status)
        elif messageType == 2:
            data = loads(request.body)
            status = self.send_mail(data["address"], data["name"], data["message"], data["subject"])
            return HttpResponse(status=status)
        return HttpResponse(status=401)
