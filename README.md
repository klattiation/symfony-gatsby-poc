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

### Start frontend with mockserver

```console
cd gatsby
npm run mockserver
npm start
```

This will start a node.js mock server on port 3000. The frontend will be built using this server. After the build process, the frontend will be available on port 8000.

_Note: It's inevitable to start the mock server before building the frontend, because the build process uses the mock server to generate all the static sites._

http://localhost:8000

### Build the frontend

Build using the mockserver:

```console
cd gatsby
npm run mockserver
npm run build
```

Build using the backend API:

```
// TODO...
```

## Further Links

- [Using Gatsby for a web app with dynamic content — A case study](https://blog.hasura.io/building-a-dynamic-listing-web-app-with-pagination-and-dynamic-pages-using-gatsby-2ddee9ec2dc3/)

## License

See [LICENSE](gatsby/LICENSE) file.
