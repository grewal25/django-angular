
from django.urls import path, include
from rest_framework import routers
from .views import MovieViewSet, RatingViewSet,UserViewSet


router=routers.DefaultRouter()
router.register(r'movies', MovieViewSet, basename='Movie')
router.register(r'ratings', RatingViewSet, basename='Rating')
router.register(r'users', UserViewSet, basename='User')


urlpatterns = [
     path('', include(router.urls)),
    
]
