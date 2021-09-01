# Generated by Django 3.2.6 on 2021-08-31 18:23

from django.db import migrations


def create_dummy_data(apps, schema_editor):
    Category = apps.get_model('advertisement', 'Category')

    Category(name='Electronics').save()
    Category(name='Housing').save()
    Category(name='Health').save()


class Migration(migrations.Migration):

    dependencies = [
        ('advertisement', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_dummy_data),
    ]