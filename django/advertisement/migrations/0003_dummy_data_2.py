# Generated by Django 3.2.6 on 2021-08-31 18:33

from django.db import migrations

def create_dummy_data(apps, schema_editor):
    Offer = apps.get_model('advertisement', 'Offer')
    Category = apps.get_model('advertisement', 'Category')

    cat_1 = Category.objects.get_or_create(name='Electronics')[0]
    cat_2 = Category.objects.get_or_create(name='Housing')[0]

    Offer(title='Epic PC', description='Epic PCEpic PCEpic PCEpic PC', price='9999', category=cat_1).save()
    Offer(title='Good PC', description='Good PCEGood PCGood PCGood PC', price='999', category=cat_1).save()
    Offer(title='Table', description='Good Table, very nice', price='99', category=cat_2).save()


class Migration(migrations.Migration):

    dependencies = [
        ('advertisement', '0002_dummy_data'),
    ]

    operations = [
        migrations.RunPython(create_dummy_data),
    ]