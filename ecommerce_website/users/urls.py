from django.urls import path
from .views import UserInfoAPI

app_name = 'user_info'
urlpatterns = [
    path('', UserInfoAPI.as_view(), name = 'user_info'),
]
