from rest_framework import decorators, response, viewsets

from advertisement.models import Category, Offer
from advertisement.serializers import CategorySerializer, OfferSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    @decorators.action(detail=True, methods=['get'])
    def offers(self, request, pk=None):
        category = self.get_object()
        offers = Offer.objects.filter(category=category)
        offers_json = OfferSerializer(offers, many=True)
        return response.Response(offers_json.data)

class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()
