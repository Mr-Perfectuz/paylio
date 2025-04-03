from django.urls import path, include
from userauths import views

app_name = "userauths"

urlpatterns = [
    path("sign-up/", views.RegisterView, name="sign-up"),
    path("sign-in/", views.LoginView, name="sign-in"),
    path("sign-out/", views.LogoutView, name="sign-out"),
]
