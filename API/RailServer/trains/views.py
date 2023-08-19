from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Trains
from .serializer import TrainSerializer
 
# Create your views here.
@api_view(['GET'])
def getTrains(request):
    train = Trains.objects.all()
    serializer = TrainSerializer(train, many=True)
    return Response(serializer.data)