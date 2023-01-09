from rest_framework.response import Response
from rest_framework.decorators import api_view
from . import models
from . import serializers


@api_view(["GET"])
def getItems(request):
    items = models.Item.objects.all()
    serializer = serializers.ItemSerializer(items, many=True)
    return Response(serializer.data)
