# Gatsby Symfony - Prove of concept

This app demonstrates the interaction of a Symfony backend and Gatsby frontend.

A list of series is provided as a REST endpoint via Symfony. Clicking the **Publish** button in the Symfony backend will start the Gatsby build process, which in turn uses the REST endpoint to dynamically generate details pages for each series.

## Setup

Prerequisites

- Install PHP
- Make sure you can run `make` from the command line (https://www.gnu.org/software/make/)
- Install Composer: https://getcomposer.org/download/
- Install Symfony CLI: https://symfony.com/download
- Install Node.js and NPM: https://nodejs.org/en/download/
- Install Gatsby CLI: `npm install --global gatsby-cli`

Then run

```console
make setup
```

## Development

### Start the app

```console
make start
```

This will start a Node.js server running Gatsby on port 9000 and a PHP server running Symfony on port 9001.

- Backend: http://localhost:9001
- Frontend: http://localhost:9000

### Stop the app

```console
make stop
```

## Further Links

- [Symfony setup](https://symfony.com/doc/current/setup.html)
- [Using Gatsby for a web app with dynamic content — A case study](https://blog.hasura.io/building-a-dynamic-listing-web-app-with-pagination-and-dynamic-pages-using-gatsby-2ddee9ec2dc3/)

## License

MIT
