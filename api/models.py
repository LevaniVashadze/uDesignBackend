from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    base_price = models.FloatField()
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    category = models.ForeignKey(
        "Category", on_delete=models.CASCADE, related_name="products"
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
