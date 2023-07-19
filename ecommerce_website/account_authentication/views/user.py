
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

@api_view(http_method_names=['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def get_current_user(request):
    print(request.user.username)
    if request.user.is_authenticated:
        return JsonResponse({'username' : request.user.__str__(), 'status' : 200})
    return JsonResponse({'status' : 404})
