# Generated by Django 3.0.4 on 2020-07-11 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('retrovalleyapp', '0002_post_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='upvotes',
            field=models.IntegerField(default=0),
        ),
    ]