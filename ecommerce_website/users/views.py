from .serializers import UserDataSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from django.http import HttpResponse, JsonResponse
from .models import CustomUser

class UserInfoAPI(generics.GenericAPIView):
    serializer_class = UserDataSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def post(self, request, *args, **kwargs):
        data = request.data 
        print(data)
        user_id = int(data['id'])
        queryset = CustomUser.objects.all().filter(id=user_id)
        print(queryset, 1)
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=201, safe = False)