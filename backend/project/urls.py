"""temporary_name URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import pkgutil

from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.defaults import page_not_found
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls

router = DefaultRouter()

urlpatterns = [
    re_path(r'^i18n/', include('django.conf.urls.i18n')),
    path('api-docs/', include_docs_urls(title='API Docs')),
    path('', include(router.urls))
]


apps_urls = [path(f"{name}/", include(f"apps.{name}.urls")) for _, name, _ in pkgutil.iter_modules(['apps'])]

urlpatterns += i18n_patterns(

    path('admin/', admin.site.urls),
    re_path(r'^accounts/signup/$', page_not_found, {'exception': Exception('Not Found')}),
    re_path(r'^accounts/', include('allauth.urls')),
    *apps_urls

    # path('', include('project.apps.common.urls')),
    # sql explorer
    # path('explorer/', include('explorer.urls')),
)

# rosetta translation
# if 'rosetta' in settings.INSTALLED_APPS:
#     urlpatterns += [
#         re_path(r'^rosetta/', include('rosetta.urls'))
#     ]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
