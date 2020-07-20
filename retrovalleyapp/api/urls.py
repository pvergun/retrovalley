from django.urls import include, path
from rest_framework import routers
from retrovalleyapp.api import views


urlpatterns = [
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>', views.ProductDetail.as_view()),
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/like/', views.PostLike.as_view()),
    path('posts/<int:pk>', views.PostDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('users/register/', views.UserCreate.as_view()),
    path('auth/', include('rest_framework.urls', namespace='rest_framework'))
]