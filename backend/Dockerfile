FROM python:latest as backend
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
RUN python manage.py collectstatic --no-input --clear
RUN python manage.py compilemessages