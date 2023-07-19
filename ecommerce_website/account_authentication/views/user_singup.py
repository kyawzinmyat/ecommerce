from ..serializers.user_serializers import UserSignupSerializer
from rest_framework.decorators import api_view
from rest_framework import generics, permissions
from rest_framework.response import Response
from users.models import CustomUser
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from ..token import account_activation_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from django.http import HttpResponse
from phonenumber_field.phonenumber import PhoneNumber


class UserSignupAPI(generics.GenericAPIView):
    serializer_class = UserSignupSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid()
        error_messages = self._generate_messages_for_signup(data)
        data['phone_number'] = self._normalize_phone_number(data['phone_number'], error_messages)
        if error_messages:
            return Response({'messages': error_messages}, status=400)
        data = serializer.data
        user = self.signup(data)
        activation_link = self._generate_activation_link_and_send_email(
            request, data, user)
        return Response({'status': 200, 'message': 'Account Created Successfully but need to be activated to login to the website', 'activation_link': activation_link}, status=200)


    def _normalize_phone_number(self, raw_phone_number, error_messages):
        try: 
            return PhoneNumber.from_string(raw_phone_number, region="MM")
        except:
            error_messages.append(
                {'message': 'Invalid Phone Number!', 'field': 'phone_number'})
        return raw_phone_number
    
    def _generate_activation_link_and_send_email(self, request, data, user):
        current_site = get_current_site(request)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = account_activation_token_generator.make_token(user)
        activation_link = f"http://{current_site}/account_authentication/activate/{uid}/{token}/"
        message = f"http://{current_site}/account_authentication/activate/{uid}/{token}/"
        subject = 'Activate Your Account'
        send_mail(
            subject,
            message,
            "kyawzinmyat00000001@gmail.com",
            [user.email],
            fail_silently=False,
        )
        return activation_link

    def _generate_messages_for_signup(self, data):
        error_messages = []
        if not self.valiate_username(data['username']):
            error_messages.append(
                {'message': 'Username already Exists!', 'field': 'username'})
        if not self.validate_email(data['email']):
            error_messages.append(
                {'message': 'Email already Exists!', 'field': 'email'})
        try:
            if not data['phone_number'].is_valid():
                error_messages.append(
                    {'message': 'Invalid Phone Number!', 'field': 'phone_number'})
        except:
            pass
        if data['password'] != data['password2']:
            error_messages.append(
                {'message': 'Password do not Match!', 'field': 'password'})
            error_messages.append({
                                  'message': 'Password do not Match!', 'field': 'password2'})
        return error_messages

    def signup(self, data):
        user = CustomUser.objects.create_user(data['email'], data['username'], data['first_name'], data['last_name'], data['password'], **{
            'gender': data['gender'],
            'phone_number': data['phone_number']
        })
        return user

    def validate_email(self, email):
        return not CustomUser.objects.filter(email=email).exists()

    def valiate_username(self, username):
        return not CustomUser.objects.filter(username=username).exists()


def activate_account(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = CustomUser.objects.get(pk=uid)
    except:
        return Response({'message': 'Invalid User!'}, status=405)

    if user and account_activation_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        html_template = """
                                    <!DOCTYPE html>
                                    <html lang="en">
                                    <head>
                                        <meta charset="UTF-8">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                        <title>HTML 5 Boilerplate</title>
                                    </head>
                                    <body style = 'text-center; display: flex; align-items:center'>
                                        <div>
                                            <h1>Account Activated Successfully</h1>
                                            <a href='http://localhost:3000/#/login'>  here to login to the website</a>
                                        </div>
                                    </body>
                                    </html>
                            """
        return HttpResponse(html_template)
        # return Response({'message': 'Account Activated Successfully'}, status=200)
    html_template = """
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>HTML 5 Boilerplate</title>
            </head>
            <body style = 'text-align:center; display: flex; align-items:center'>
                <div>
                    <h1 style='text-align:center'>There is something wrong!</h1>
                </div>
            </body>
            </html>
    """
    return HttpResponse(html_template)
    
