from rest_framework import routers
from . import views

router = routers.SimpleRouter()
router.register('products', views.ProductViewSet, basename='products')
router.register('categories', views.CategoryViewSet, basename='categories')
urlpatterns = router.urls
