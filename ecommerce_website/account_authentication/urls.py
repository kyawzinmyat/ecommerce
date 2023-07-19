from django.urls import path
from .views import token, user_login, user_logout, user, token, user_singup
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', user_login.login_view),
    path('login/', user_login.UserLoginAPI.as_view(), name='api_login'),
    path('logout/', user_logout.UserLogoutAPI.as_view(), name='api_logout'),
    path('signup/', user_singup.UserSignupAPI.as_view(), name='api_signup'),
    path('get_current_user/', user.get_current_user, name='api_get_current_user'),
    path('api/token/', token.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('activate/<slug:uidb64>/<slug:token>/', user_singup.activate_account, name='api_account_activate')
]
