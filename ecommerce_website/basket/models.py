from django.db import models
from users.models import CustomUser
from products.models import Product
from django.db.models.signals import post_save


def _create_basket(sender, instance, created, **kwargs):
    if created:
        print("##########################----created----############")
        Basket.objects.create(owner=instance, basket_qty=0)


post_save.connect(_create_basket, sender=CustomUser)


class Basket(models.Model):

    owner = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, primary_key=True)
    basket_qty = models.IntegerField()

class Item(models.Model):

    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField()
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    basket = models.ForeignKey(Basket, on_delete=models.CASCADE, null=True)
    product_name = models.CharField(max_length=255, default="title", blank=True)
    product_image = models.ImageField(upload_to='images/', default='images/default.png')


    @classmethod
    def add_item(cls, product_id, basket, qty=1):
        item = Item.objects.filter(product=product_id, basket = basket)
        item_obj = item.first()
        product = Product.objects.get(id=product_id)
        if not item.exists():
            item_obj = Item.objects.create(product=product, product_name=product.title, quantity=0, product_price=product.price,
                                           total_price=0, basket=Basket.objects.get(pk=basket), product_image = product.image)
        item_obj.quantity += qty
        item_obj.total_price += Item._compute_total_price(product.price, qty)
        item_obj.save()

    @classmethod
    def check_available_qty(cls, demand, available):
        return available >= demand

    @classmethod
    def remove_item(cls, product_id, basket, qty=1):
        item = Item.objects.filter(product=product_id)
        item_obj = item.first()
        if cls.check_available_qty(qty, item_obj.quantity):
            product = Product.objects.get(id=product_id)
            if not item.exists():
                item_obj = Item.objects.create(product=product, quantity=qty, product_price=product.price, total_price=Item._compute_total_price(
                    product.price, qty), basket=Basket.objects.get(pk=basket))
            item_obj.quantity -= qty
            item_obj.total_price = cls._compute_total_price(item_obj.product_price, qty)
            if item_obj.quantity == 0:
                item_obj.delete()
                return
            item_obj.save()

    @classmethod
    def _compute_total_price(cls, product_price, qty):
        return qty * product_price

    def _compute_total_quantity(self):
        return self.quantity
