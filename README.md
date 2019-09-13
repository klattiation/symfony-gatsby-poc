# AdB - Virtual Academy

## Setup

Prerequisites

- Install Composer: https://getcomposer.org/download/
- Install Symfony CLI: https://symfony.com/download
- Install Node.js and NPM: https://nodejs.org/en/download/
- Install Gatsby CLI: `npm install --global gatsby-cli`

Then run

```console
make setup
```

## Development

### Start frontend

With the mock server API:

```console
cd gatsby
npm run mockserver
npm start
```

This will start a node.js mock server on port 3000. The frontend will be built using this server. After the build process, the frontend will be available at http://localhost:8000.

_Note: It's inevitable to start the mock server before building the frontend, because the build process uses the mock server to generate all the static sites._

With the backend API:

```
// TODO...
```

### Build the frontend for production

At the moment, the frontend can be built using the mock server API (backend API is not implemented yet):

```console
cd gatsby
npm run mockserver
npm run build
```

This will build the frontend into the `/public` folder. This folder now contains a static frontend that can be deployed to any server.

Running the following command will start a local server at http://localhost:9000 that runs the production-ready frontend:

```
npm run serve
```

## Further Links

- [Using Gatsby for a web app with dynamic content — A case study](https://blog.hasura.io/building-a-dynamic-listing-web-app-with-pagination-and-dynamic-pages-using-gatsby-2ddee9ec2dc3/)

## License

See [LICENSE](gatsby/LICENSE) file.
