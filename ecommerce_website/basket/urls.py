from django.urls import path
from .views import BasketAPI, BasketAddApi, BasketQtyApi, BasketSummaryApi, BasketRemoveApi

app_name = 'basket'
urlpatterns = [
    path('', BasketAPI.as_view(), name = 'basket'),
    path('add-item/', BasketAddApi.as_view(), name = 'basket-add-item'),
    path('remove-item/', BasketRemoveApi.as_view(), name = 'basket-remove-item'),
    path('basket-qty', BasketQtyApi.as_view(), name = 'basket-qty'),
    path('basket-summary', BasketSummaryApi.as_view(), name = 'basket-summary'),
]