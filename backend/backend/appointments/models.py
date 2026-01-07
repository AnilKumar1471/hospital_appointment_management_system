# Create your models here.
from django.db import models
from accounts.models import User

class DoctorAvailability(models.Model):
    doctor = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'role' : 'DOCTOR'}
    )
    
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    
    def __str__(self):
        return f"{self.doctor.username} - {self.date}"
    
    
class Appointment(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('APPROVED', 'Approved'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    )
    
    doctor = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="doctor_appointment",
        limit_choices_to={'role' : 'DOCTOR'}
    )
    
    patient = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="patient_appointment",
        limit_choices_to={'role' : 'PATIENT'}
    )
    
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='PENDING'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.patient.username} - {self.doctor.username} ({self.date})"
