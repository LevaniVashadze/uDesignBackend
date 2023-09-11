from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    base_price = models.FloatField()
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    stock = models.IntegerField(default=1, null=True)
    category = models.ForeignKey(
        "Category", on_delete=models.SET_NULL, related_name="products", null=True
    )

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name


class CartItem(models.Model):
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.user} - {self.product}"

    def __repr__(self):
        return f"{self.user} - {self.product}"

    def get_total(self):
        return self.product.base_price * self.quantity


class Order(models.Model):
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    total = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - {self.created}"

    def __repr__(self):
        return f"{self.user} - {self.created}"


class Project:
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    data = models.JSONField()
    created = models.DateTimeField(auto_now_add=True)
