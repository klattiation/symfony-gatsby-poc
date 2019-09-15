# AdB - Virtual Academy

## Setup

Prerequisites

- Install [Composer](https://getcomposer.org/download/)
- Install [Symfony CLI](https://symfony.com/download)
- Install [Node.js and NPM](https://nodejs.org/en/download/)
- Install Gatsby CLI: `npm i -g gatsby-cli`
- Install [Prettier](https://prettier.io/)

Setup the project by running:

```console
make setup
```

## Development

### Start frontend

```console
make start-mockserver
make start-frontend-dev
```

This will start a node.js mock server on port 3000. The frontend will be built using this server until the Symfony API is implemented. After the build process, the frontend is available at http://localhost:8000.

_Note: It's inevitable to start the server before building the frontend, because site data will be fetched from the server during the build process._

## Deployment

### Production build

```console
make build-frontend-prod
```

This will build the frontend into the `gatsby/public` folder. This folder will then contain a static web app that can be deployed to any server.

To test the production-ready frontend, run the following command which will start a local server at http://localhost:9000:

```
make start-frontend-prod
```

## Further details

- [Frontend](docs/frontend.md)
- [REST API](docs/api.md)
- [Further links](docs/links.md)

## License

See [LICENSE](LICENSE) file.
