from .models import CustomUser, Vendor
from rest_framework import serializers

class UserDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'phone_number', 'gender', 'first_name', 'last_name', 'is_vendor', 'image']

class VendorDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vendor
        fields = ['id', 'user']