help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

image: ## build frontend backend statics images
	docker build  --target frontend ./frontend -t frontend
	docker build  --target frontend-prod-stage ./frontend -t frontend-prod-stage

run:       ## Run app locally
	docker-compose -f ./config/docker/docker-compose.dev.yml up

restart:       ## restart dev env
	docker-compose -f ./config/docker/docker-compose.dev.yml restart

ssh-frontend:       ## ssh frontend
	docker-compose -f ./config/docker/docker-compose.dev.yml exec frontend bash

logs-frontend:       ## logs frontend
	docker-compose -f ./config/docker/docker-compose.dev.yml logs -f --tail=100 frontend



