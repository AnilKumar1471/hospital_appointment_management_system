from django.urls import path
from .views import (register, login,admin_dashboard,
                    doctor_dashboard,patient_dashboard,
                    change_password,forgot_password,
                    reset_password,
                    admin_status
                    )

urlpatterns = [
    path('register/', register),
    path('login/', login),
    
    path('admin/dashboard/', admin_dashboard),
    path('admin/stats/', admin_status),
    path('doctor/dashboard/', doctor_dashboard),
    path('patient/dashboard/', patient_dashboard),
    
    path('change-password/', change_password),
    path('forgot-password/', forgot_password),
    path('reset-password/', reset_password)
]
