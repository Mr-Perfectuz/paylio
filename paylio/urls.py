 

from django.contrib import admin
from django.urls import path, include
from core import views
from django.conf.urls.static import static
from django.conf import settings
import os
from core.views import AdminLogoutView  # Adjust if placed elsewhere



urlpatterns = [
    path('admin/logout/', AdminLogoutView.as_view(), name='admin-logout'),   
    path("admin/", admin.site.urls),
    path("", include("core.urls")),  
    path("", views.index, name="index"), 
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
    path("user/", include("userauths.urls")),
    path('account/', include('account.urls', namespace='account')), 
   

]
 

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, 'paylio', 'static'))

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)