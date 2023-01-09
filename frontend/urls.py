from django.urls import path
from . import views

from django.urls import path
from . import views


urlpatterns = [
    path("", views.index),
    path("about", views.index),
    path("contact", views.index),
    path("products", views.index),
    path("products/<id>", views.index),
]
