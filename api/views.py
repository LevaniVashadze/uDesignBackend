from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from . import models
from . import serializers


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer


class CartItemViewSet(viewsets.ModelViewSet):
    queryset = models.CartItem.objects.all()
    serializer_class = serializers.CartItemSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer


class UserViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = serializers.UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get(self, request):
        queryset = User.objects.all()
        pk = request.user.pk
        user = get_object_or_404(queryset, pk=pk)
        serializer = serializers.UserSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        queryset = User.objects.all()
        pk = request.user.pk
        user = get_object_or_404(queryset, pk=pk)
        serializer = serializers.UserSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def patch(self, request):
        queryset = User.objects.all()
        pk = request.user.pk
        user = get_object_or_404(queryset, pk=pk)
        serializer = serializers.UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request):
        queryset = User.objects.all()
        pk = request.user.pk
        user = get_object_or_404(queryset, pk=pk)
        user.delete()
        return Response({"message": "User deleted successfully."})
