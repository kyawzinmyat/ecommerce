from django.contrib.auth.models import User
from .serializers import ProductSerializers, CategorySerializers, MainCategorySerializers
from rest_framework import generics, permissions
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from .models import Product, Category, MainCategory, Vendor


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
        queryset = Product.objects.all()
        data = self.request.data
        if data.get('productCategory'):
            product_category_id = int(data.get('productCategory').get('id') or 0)
            queryset = queryset.filter(category=product_category_id)
        if data.get('vendor'):
            product_vendor_id = int(data.get('vendor').get('id'))
            queryset = queryset.filter(vendor=Vendor.objects.get(user=product_vendor_id))
        if data.get('pagination'):
            queryset = queryset[data['pagination']['offset']: data['pagination']['offset'] + data['pagination']['size']]
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=200, safe = False)

    def get(self, request, *args, **kwargs):
        queryset = Product.objects.all()
        serializer = self.get_serializer(queryset, many = True)
        return JsonResponse(serializer.data, status=200, safe = False)

        