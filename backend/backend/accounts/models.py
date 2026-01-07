
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models
import random 


# class User(AbstractUser):
#     ROLE_CHOICES = (
#         ('ADMIN', 'Admin'),
#         ('DOCTOR', 'Doctor'),
#         ('PATIENT', 'Patient'),
#     )
#     role = models.CharField(max_length=10, choices=ROLE_CHOICES)
#     phone = models.CharField(max_length=15)

class User(AbstractUser):
    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('DOCTOR', 'Doctor'),
        ('PATIENT', 'Patient'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    phone = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"

class DoctorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=100)
    experience = models.IntegerField()
    available_from = models.TimeField()
    available_to = models.TimeField()
    
    def __str__(self):
        return self.user.username

class PatientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    
    def __str__(self):
        return self.user.username
    
class PasswordResetOTP(models.Model):
    email = models.EmailField()
    otp = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        self.otp = random.randint(100000, 999999)
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.email}-{self.otp}"
