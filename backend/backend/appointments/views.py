from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from accounts.permissions import IsDoctor, IsPatient
from django.utils.timezone import now
from .models import Appointment

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsDoctor])
def doctor_dashboard(request):
    today = now().date()
    appointment = Appointment.objects.filter(
        doctor = request.user,
        date = today
    ).values('patient_username', 'time', 'status')
    
    return Response(appointment)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsPatient])
def patient_dashboard(request):
    appointments = Appointment.objects.filter(
        patient = request.user
    ).values("doctor_username", 'date', 'time', 'status')
    
    return Response(appointments)