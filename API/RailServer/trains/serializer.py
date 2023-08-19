from rest_framework import serializers
from .models import Trains
 
class TrainSerializer(serializers.ModelSerializer):
    class Meta:
        model=Trains
        fields=('trainName','trainNumber', 'departureTime')