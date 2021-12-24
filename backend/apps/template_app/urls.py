from django.urls import path
from apps.template_app import views
from project.urls import router
app_name = "template_app"

router.register(f'{app_name}/users', views.UserViewSet)

urlpatterns = [
    # path('function-view-example/<purpose>/<amount>', views.function_view_example, name='function_view_example'),
    # drf class view
    # path('drf-example/', views.UserViewSet.as_view({'get': 'list'}), name='drf_example'),

]