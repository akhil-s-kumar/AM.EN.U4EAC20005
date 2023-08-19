from django.db import models

# Create your models here.
class Trains(models.Model):
    trainName = models.CharField(max_length=200)
    trainNumber = models.CharField(max_length=500)
    departureTime = models.DateTimeField()