from django.urls import path
from .views import UserInfoAPI, VendorInfoAPI, VendorAllAPI

app_name = 'user_info'
urlpatterns = [
    path('', UserInfoAPI.as_view(), name = 'user_info'),
    path('vendor', VendorInfoAPI.as_view(), name = 'vendor_info'),
    path('vendor-all', VendorAllAPI.as_view(), name='vendor_all')
]
