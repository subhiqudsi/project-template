help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

image: ## build frontend backend statics images
	docker build  --target frontend ./frontend -t frontend
	docker build  --target backend ./backend -t backend
	docker build  --target frontend-prod-stage ./frontend -t frontend-prod-stage

run:       ## Run app locally
	docker-compose -f ./config/docker/docker-compose.dev.yml stop
	docker-compose -f ./config/docker/docker-compose.dev.yml up -d
	docker-compose -f ./config/docker/docker-compose.dev.yml exec backend python manage.py migrate

down: ## turn off backend frontend servers
	docker-compose -f ./config/docker/docker-compose.dev.yml down

services:       ## Run dbs & other needed services
	docker-compose -f ./config/docker/docker-compose.services.yml up -d

services-down:       ## turn off dbs & other services
	docker-compose -f ./config/docker/docker-compose.services.yml down

restart:       ## restart dev env
	docker-compose -f ./config/docker/docker-compose.dev.yml restart

ssh-fe:       ## ssh frontend
	docker-compose -f ./config/docker/docker-compose.dev.yml exec frontend bash

ssh-be:       ## ssh backend
	docker-compose -f ./config/docker/docker-compose.dev.yml exec backend bash

logs-fe:       ## logs frontend
	docker-compose -f ./config/docker/docker-compose.dev.yml logs -f --tail=100 frontend

logs-be:     ## logs backend
	docker-compose -f ./config/docker/docker-compose.dev.yml logs -f --tail=100 backend



