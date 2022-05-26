
from django.contrib import admin
from django.urls import path
from app.views import home, qr_code, send_email
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('qr_code', qr_code, name='qr_code'),
    path('send-mail', send_email, name='send_mail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
