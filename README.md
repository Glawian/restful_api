# Restful API
Simple application created with Django and Angular frameworks.

## Setup application
In the root of the repository run following commands (Linux):

```
docker-compose build - to build images
docker-compose up - start the containers (use -d if necessary)
docker-compose run rest-api python manage.py createsuperuser
docker-compose run rest-api python manage.py migrate
```

Migration will create dummy data for the application.

**Django** project will be available under [localhost:80](http://localhost:80)

**Angular** project will be available under [localhost:8080](http://localhost:8080)
