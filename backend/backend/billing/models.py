from django.db import models

# Create your models here.
from django.db import models
from appointments.models import Appointment

class Bill(models.Model):
    PAYMENT_STATUS =(
        ('PENDING', 'Pending'),
        ('PAID', 'Paid'),
    )
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE)
    consultation_fee = models.FloatField()
    room_fee = models.FloatField()
    total_amount = models.FloatField()
    payment_status = models.CharField(
        max_length=10,
        choices = PAYMENT_STATUS,
        default='PENDING'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        self.total_amount = self.consultation_fee + self.room_fee
        
        
    def __str__(self):
        return f"Bill - {self.id} - {self.payment_status}"
    
