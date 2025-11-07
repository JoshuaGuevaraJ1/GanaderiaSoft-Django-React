from django.urls import include, path
from rest_framework import routers
from catalogs import views

router = routers.DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'breeds', views.BreedViewSet)
router.register(r'animals', views.AnimalViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/v1/', include(router.urls)),
]