from django.contrib.auth.models import User
from rest_framework import viewsets
from ..serializers.user_serializers import UserSerializer, UserLoginSerializer
from rest_framework.decorators import api_view
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def login_view(request, *args, **kwargs):
    model_data = User.objects.all().order_by('?')
    data = UserSerializer(model_data, context={'request': request}, many = True).data
    return Response(data)

class UserLoginAPI(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def post(self, request, *args, **kwargs):
        data = request.data 
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response = serializer.login(request, data)
        return response