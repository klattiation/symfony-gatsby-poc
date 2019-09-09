setup-backend:
	cd ./symfony/ && composer install

setup-frontend:
	cd ./gatsby/ && npm install

setup: setup-backend setup-frontend build

start-backend:
	cd ./symfony/ && symfony server:start -d --port=9001 --no-tls

stop-backend:
	cd ./symfony/ && symfony server:stop

start-frontend:
	cd ./gatsby/ && npm run serve

start-frontend-dev:
	cd ./gatsby/ && npm start

start: stop-backend start-backend start-frontend

stop: stop-backend

build:
	cd ./gatsby && npm run build
