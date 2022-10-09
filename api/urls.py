from django.urls import path
from . import views

urlpatterns = [
    path('items', views.getItems, name='items'),
]
