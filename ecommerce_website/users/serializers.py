from .models import CustomUser
from rest_framework import serializers

class UserDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'phone_number', 'gender', 'first_name', 'last_name', 'is_vendor']