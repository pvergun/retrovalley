from rest_framework import serializers
from retrovalleyapp.models import Product, Post
from django.contrib.auth.models import User


class ProductSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Product
        fields = ['name', 'description', 'link', 'author', 'upvotes']


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    upvotes = serializers.IntegerField(source='upvotes.count', read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'date', 'author', 'products', 'upvotes']


class UserSerializer(serializers.ModelSerializer):
    products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('username', 'products', 'email', 'posts', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
