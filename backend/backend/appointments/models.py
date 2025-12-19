from django.db import models

# Create your models here.
from django.db import models
from accounts.models import User

class Appointment(models.Model):
    doctor = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="doctor_appointments",
        limit_choices_to={'role': 'DOCTOR'}
    )
    patient = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="patient_appointments",
        limit_choices_to={'role': 'PATIENT'}
    )
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(
        max_length=20,
        default='PENDING'
    )
