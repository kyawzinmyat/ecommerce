from django.contrib.auth.models import User
from ..serializers.user_serializers import UserLogoutSerializer
from rest_framework import generics, permissions
from rest_framework.response import Response

class UserLogoutAPI(generics.GenericAPIView):
    serializer_class = UserLogoutSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        return serializer.logout(request)
        