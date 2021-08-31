from rest_framework.routers import DefaultRouter

from advertisement.views import CategoryViewSet, OfferViewSet


router = DefaultRouter()
router.register(r'category', CategoryViewSet, basename='category')
router.register(r'offer', OfferViewSet, basename='offer')
urlpatterns = router.urls
