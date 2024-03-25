from django.contrib.auth.models import Group
from users.models import CustomUser
from rest_framework import serializers
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email']


class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'phone_number','gender']

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password']

    def login(self, request, data):
        user = authenticate(
                                request,
                                email = data['username'],
                                password = data['password']
                            )
        if user:
            login(request, user)
            return Response({'status' : 200, 'message' : 'Log In successfully'}, status = 200)
        return Response(
            {
                'message' : 'Invliad usernane or password',
                'status' : 401
            }
            ,status = 401)
    

class UserLogoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password']

    def logout(self, request):
        logout(request)
        return Response({
            'status' : 200,
            'message' : 'Logout Successfully'
        }, status = 200)

