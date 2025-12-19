from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer
from .models import User
from .permissions import IsAdmin, IsDoctor,IsPatient
from rest_framework.permissions import IsAuthenticated

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