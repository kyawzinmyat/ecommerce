from rest_framework import serializers
from rest_framework.response import Response
from .models import Basket, Item

class BasketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Basket
        fields = ['owner']

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['pk', 'product', 'quantity', 'product_price', 'total_price', 'basket', 'product_name', 'product_image']
