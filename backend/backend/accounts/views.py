from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer
from .models import User, PasswordResetOTP
from .permissions import IsAdmin, IsDoctor,IsPatient
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import check_password
from django.core.mail import send_mail
from appointments.models import Appointment

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"})
    return Response(serializer.errors, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    user = authenticate(
        username=request.data.get('username'),
        password=request.data.get('password')
    )

    if user is None:
        return Response({"error": "Invalid credentials"}, status=401)

    refresh = RefreshToken.for_user(user)

    return Response({
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "role": user.role,
        "username": user.username
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated,IsAdmin])
def admin_dashboard(request):
    return Response({
        "message" : "Welcome Admin",
        "user" : request.user.username
    })
    

@api_view(['GET'])
@permission_classes([IsAuthenticated,IsDoctor])
def doctor_dashboard(request):
    return Response({
        "message" : "Welcome Doctor",
        "user" : request.user.username
    })
    

@api_view(['GET'])
@permission_classes([IsAuthenticated,IsPatient])
def patient_dashboard(request):
    return Response({
        "message" : "Welcome Patient",
        "user" : request.user.username
    })
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    user = request.user
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')
    
    if not user.check_password(old_password):
        return Response({
            "error" : "Old password is incorrect"
        })
        
    user.set_password(new_password)
    user.save()
    
    return Response({
        "message" : "Password changed successfully"
    })
    
@api_view(['POST'])
def forgot_password(request):
    email = request.data.get('email')
    
    if not User.objects.filter(email = email).exists():
        return Response({
            "error" : "Email not registered"
        })
        
    otp_obj = PasswordResetOTP.objects.create(email = email)
    
    send_mail(
        'Password Reset OTP',
        f'Your OTP is {otp_obj.otp}',
        'admin@hospital.com',
        [email],
    )
    
    return Response({
        "message" : "OTP sent to email"
    })
    
@api_view(['POST'])
def reset_password(request):
    email = request.data.get('email')
    otp = request.data.get('otp')
    new_password = request.data.get('new_password')
    
    try:
        otp_obj = PasswordResetOTP.objects.filter(
            email = email, otp = otp
        ).latest('created_at')
        
    except:
        return Response({
            "error" : "Invalid OTP"
        })
        
    user = User.objects.get(email = email)
    user.set_password(new_password)
    user.save()
    
    otp_obj.delete()
    
    return Response({
        "message" : "Password reset successfully"
    })
    
    
@api_view(['GET'])
@permission_classes([IsAuthenticated,IsAdmin])
def admin_status(request):
    return Response({
        "total_doctors" : User.objects.filter(role = 'DOCTOR').count(),
        "total_patients" : User.objects.filter(role = 'PATIENT').count(),
        "total_appointment" : Appointment.objects.count()
    })