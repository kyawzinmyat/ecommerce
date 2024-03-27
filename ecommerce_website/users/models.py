from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    use_in_migrations = True
   
    def create_user(self, email, username, first_name, last_name, password, **others):
        if not email:
            raise ValueError('You must provide an email')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, first_name=first_name, last_name=last_name, **others)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, username, first_name, last_name, password, **others):
        others.setdefault('is_staff', True)
        others.setdefault('is_superuser', True)
        others.setdefault('is_active', True)
        self.create_user(email, username, first_name, last_name, password, **others)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(("Email"), max_length=254, unique=True)
    phone_number = PhoneNumberField(blank=True)
    gender = models.CharField('Gender', blank=True, null=True, max_length=20)
    username = models.CharField(("Username"), max_length=50, unique=True)
    first_name = models.CharField(("Firstname"), max_length=50)
    image = models.ImageField(upload_to='images/', default='images/default.png')
    last_name = models.CharField(("Lastname"), max_length=50)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    data_joined = models.DateTimeField((""), default=timezone.now)
    objects = CustomUserManager()
    is_vendor = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=True)

    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = ['username',  'first_name', 'last_name']

    def __str__(self):
        return self.username
    
class Vendor(models.Model):

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    vendor_name = models.CharField('Vendor Name', null=True, max_length=50)

    def __str__(self):
        return self.user.username