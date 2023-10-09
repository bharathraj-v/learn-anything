from django.urls import path

from . import views
from .views import Guide

urlpatterns = [
    path('', Guide.as_view(), name='guide'),
]