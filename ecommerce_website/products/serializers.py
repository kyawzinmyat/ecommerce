from django.contrib.auth.models import User, Group
from rest_framework import serializers
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from .models import Product, Category, MainCategory

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'image', 'title', 'description','price','in_stock']

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class MainCategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = MainCategory
        fields = ['id', 'name']