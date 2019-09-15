setup-backend:
	cd ./symfony/ && composer install

setup-frontend:
	cd ./gatsby/ && npm install

setup: setup-backend setup-frontend

build-frontend:
	cd ./gatsby && npm run build

start-backend:
	cd ./symfony/ && symfony server:start -d --port=9001 --no-tls

stop-backend:
	cd ./symfony/ && symfony server:stop

start-mockserver:
	cd ./gatsby/ && npm run mockserver

start-frontend-dev:
	cd ./gatsby/ && npm start

build-frontend-prod:
	cd ./gatsby/ && npm run build

start-frontend-prod:
	cd ./gatsby/ && npm run serve

