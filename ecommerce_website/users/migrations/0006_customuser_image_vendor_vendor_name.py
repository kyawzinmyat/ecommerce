# Generated by Django 4.1.6 on 2024-03-26 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_customuser_is_customer_customuser_is_vendor_vendor'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='image',
            field=models.ImageField(default='images/default.png', upload_to='images/'),
        ),
        migrations.AddField(
            model_name='vendor',
            name='vendor_name',
            field=models.CharField(max_length=50, null=True, verbose_name='Vendor Name'),
        ),
    ]
