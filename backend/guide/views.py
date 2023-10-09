from django.shortcuts import render
from django.http import HttpResponse
import openai
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import requests

import os
from dotenv import load_dotenv


class Guide(APIView):

    def post(self, request):
        message = request.data['message']
        return Response(message, status=status.HTTP_200_OK) if message else Response(status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        return Response("Post the user request", status=status.HTTP_200_OK)
