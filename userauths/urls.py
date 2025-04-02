from django.urls import path
from userauths import views
from django.contrib.auth import views as auth_views


app_name ="userauths"

urlpatterns = [
    path("sign-up/", views.RegisterView, name="sign-up"),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'), 

]