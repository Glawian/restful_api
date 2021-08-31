from django.contrib import admin

from advertisement.models import Category, Offer


class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'created_at', 'category')

admin.site.register(Category)
admin.site.register(Offer, OfferAdmin)
