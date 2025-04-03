 

from django.contrib import admin
from django.urls import path, include
from core import views
from django.conf.urls.static import static
from django.conf import settings
import os


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("core.urls")),   
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
    path("user/", include("userauths.urls")),
    path('account/', include('account.urls', namespace='account')), 
   

]
 

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, 'paylio', 'static'))