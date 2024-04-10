from .serializers import UserDataSerializer, VendorDataSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from django.http import HttpResponse, JsonResponse
from .models import CustomUser, Vendor

class UserInfoAPI(generics.GenericAPIView):
    serializer_class = UserDataSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def post(self, request, *args, **kwargs):
        data = request.data 
        user_id = int(data['id'])
        queryset = CustomUser.objects.all().filter(id=user_id)
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=201, safe = False)
    
class VendorAllAPI(generics.GenericAPIView):
    serializer_class = UserDataSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get(self, request, *args, **kwargs):
        queryset = CustomUser.objects.filter(is_vendor=True)
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=201, safe = False)
    
class VendorInfoAPI(generics.GenericAPIView):
    serializer_class = VendorDataSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get(self, request, *args, **kwargs):
        queryset = Vendor.objects.all()
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=201, safe = False)