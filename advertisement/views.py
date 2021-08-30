from rest_framework import viewsets

from advertisement.models import Category, Offer
from advertisement.serializers import CategorySerializer, OfferSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()
