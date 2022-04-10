from django import forms
from api.v1.candidates.models import Candidate


class CandidateForm(forms.ModelForm):
    class Meta:
        model = Candidate
        fields = "__all__"
