FROM python:latest as backend
WORKDIR /app
COPY . /app
RUN pip install -r requirments.txt

RUN ["chmod", "a+x", "/app/entry"]
ENTRYPOINT ["/app/entry"]
CMD ["runserver"]