from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    # a model basic router demo
    # todo: ITS not secure neither the password will work this way
    class Meta:
        model = User
        fields = ('__all__')