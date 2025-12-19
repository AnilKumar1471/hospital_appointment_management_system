from django.urls import path
from .views import register, login,admin_dashboard,doctor_dashboard,patient_dashboard

urlpatterns = [
    path('register/', register),
    path('login/', login),
    
    path('admin/dashboard/', admin_dashboard),
    path('doctor/dashboard/', doctor_dashboard),
    path('patient/dashboard/', patient_dashboard)
]
