from django.shortcuts import render
from users.models import CustomUser
from rest_framework import viewsets
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import BasketSerializer, ItemSerializer
from .models import Basket, Item

class BasketAPI(generics.GenericAPIView):

    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = BasketSerializer
    
    def post(self, request, *args, **kwargs):
        user_id = request.data.get('user_id')
        basket = Basket.objects.get(owner=CustomUser.objects.get(id=user_id))
        return Response()
    
    def compute_basket_qty(self, user_id):
        basket = Basket.objects.get(owner=CustomUser.objects.get(id=user_id))
        items = Item.objects.filter(basket=basket)
        return sum([item.quantity for item in items])

class BasketAddApi(generics.GenericAPIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = BasketSerializer
    def post(self, request, *args, **kwargs):
        data = request.data
        Item.add_item(data['product_id'], Basket.objects.get(owner=data['user_id']), data['product_qty'])
        return Response({'qty': compute_basket_qty(data['user_id'])}, status=200)

class BasketRemoveApi(generics.GenericAPIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = BasketSerializer
    def post(self, request, *args, **kwargs):
        data = request.data
        Item.remove_item(data['product_id'], Basket.objects.get(pk=data['user_id']), data['product_qty'])
        return Response({'qty': compute_basket_qty(data['user_id'])}, status=200)

class BasketQtyApi(generics.GenericAPIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = BasketSerializer

    def post(self, request, *args, **kwargs):
        user_id = request.data.get('user_id')
        # basket = Basket.objects.get(owner=CustomUser.objects.get(id=user_id))
        return Response({'qty' : compute_basket_qty(user_id)},status=200)

class BasketSummaryApi(generics.GenericAPIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = ItemSerializer

    def post(self, request, *args, **kwargs):
        user_id = request.data.get('user_id')
        basket = Basket.objects.get(owner=CustomUser.objects.get(id=user_id))
        items = Item.objects.filter(basket=basket)
        serializer = self.get_serializer(items, many = True)
        return Response({'items' : serializer.data}, status=200)


def compute_basket_qty(user_id):
    basket = Basket.objects.get(owner=CustomUser.objects.get(id=user_id))
    items = Item.objects.filter(basket=basket)
    return sum([item.quantity for item in items])