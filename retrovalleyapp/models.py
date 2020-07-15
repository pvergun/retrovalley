from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=200)
    cat_id = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE, null=True)
    upvotes = models.ManyToManyField('auth.User', related_name='upvotes', blank=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=200)
    cat_id = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    post = models.ForeignKey(Post, related_name='products', on_delete=models.SET_NULL, null=True)
    link = models.URLField()
    author = models.ForeignKey('auth.User', related_name='products', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product_id = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.FileField(upload_to='uploads/')
