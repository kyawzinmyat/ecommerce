from django.contrib.auth.models import User
from .serializers import ProductSerializers, CategorySerializers, MainCategorySerializers
from rest_framework import generics, permissions
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from .models import Product, Category, MainCategory


class ProductMainCategoriesAPI(generics.GenericAPIView):
    serializer_class = MainCategorySerializers
    queryset = MainCategory.objects.all()

    def get(self, request, *args, ** kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=201, safe = False)
    
class ProductCategoriesAPI(generics.GenericAPIView):
    serializer_class = CategorySerializers
    queryset = Category.objects.all()

    def get(self, request, *args, ** kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=201, safe = False)
class ProductsAllAPI(generics.GenericAPIView):
    serializer_class = ProductSerializers
    queryset = Product.objects.all()

    def post(self, request, *args, **kwargs):
        product_category_id = int(self.request.data['productCategory']['id'])
        queryset = Product.objects.all().filter(category=product_category_id)
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=200, safe = False)

    def get(self, request, *args, **kwargs):
        queryset = Product.objects.all()
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=200, safe = False)

        