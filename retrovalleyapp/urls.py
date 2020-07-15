from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets


urlpatterns = [
    path(r'api/', include('retrovalleyapp.api.urls'))
]