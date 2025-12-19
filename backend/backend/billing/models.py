from django.db import models

# Create your models here.
from django.db import models
from appointments.models import Appointment

class Bill(models.Model):
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE)
    consultation_fee = models.FloatField()
    room_fee = models.FloatField()
    total = models.FloatField()
    paid = models.BooleanField(default=False)
