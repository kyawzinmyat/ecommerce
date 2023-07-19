from django.urls import path
from .views import ProductsAllAPI, ProductCategoriesAPI, ProductMainCategoriesAPI

app_name = 'products'
urlpatterns = [
    path('', ProductsAllAPI.as_view(), name = 'products_all'),
    path('categories', ProductCategoriesAPI.as_view(), name = 'product_categories'),
    path('main-categories', ProductMainCategoriesAPI.as_view(), name = 'product_main_categories')
]
