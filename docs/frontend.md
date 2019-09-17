[Home](../README.md)

# Frontend

The frontend is build with the static site generator [Gatsby](https://www.gatsbyjs.org/), which is built on top of [React.js](https://reactjs.org/).

## Code style

Code is formatted using [Prettier](https://prettier.io). The formatting rules are defined in the [.prettierrc](../gatsby/.prettierrc) file. There are plugins for all major IDEs that perform code formatting when saving a file.

## Styling

We use [CSS modules](https://www.gatsbyjs.org/docs/css-modules/) and [Sass](https://www.gatsbyjs.org/docs/sass/) without any CSS frameworks.

## Component structure

The component structure follows best practices described in this [blog post](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145).

Each component lives in its own directory and consist of:

- **`index.js`**: Enables easy imports, exports the top-most component js file.
- **`component-name.container.tsx`**: Contains the business logic and state management as handled before being sent to the stateless view component.
- **`component-name.container.test.tsx`**: Contains tests for the container.
- **`component-name.view.tsx`**: Stateless view component
- **`component-name.view.test.tsx`**: Contains tests for the view component.
- **`component-name.module.scss`**: SCSS module, imported by the stateless view component.

## npm scripts

- **`npm run build`**: builds the production-ready app into the public folder
- **`npm run clean`**: removes gatsby-generated files and folders like `.cache` and `public`
- **`npm run format`**: runs prettier
- **`npm run lint`**: runs tslint to make sure all the rules we specified in the [tslint.json](../gatsby/tslint.json)
- **`npm run mockserver`**: starts the mockserver on port 3000
- **`npm run serve`**: starts the app production app port 9000
- **`npm run start`**: starts the app in dev mode on port 8000
- **`npm run playground`**: same as `start` but with fancy GraphiQL interface
- **`npm run test`**: runs (non-existent) unit tests
- **`npm run type-check`**: ensures you have no conflicts in your types

## File structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .cache
    ├── node_modules
    ├── plugins
    ├── public
    └── src
        ├── components
        ├── pages
        └── style
        └── templates
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json

- **`/.cache`**: _Automatically generated._ This folder is an internal cache created automatically by Gatsby. The files inside this folder are not meant for modification.

- **`/public`**: _Automatically generated._ The output of the build process will be exposed inside this folder. Should be added to the .gitignore file if not added already.

- **`/plugins`**: This folder hosts any project-specific (“local”) plugins that aren’t published as an npm package. Check out the [plugin docs](https://www.gatsbyjs.org/docs/plugins/) for more detail.

- **`/mockserver`**: This directory contains the mock server to provide test data until the backend API is fully implemented. It is based on [json-server](https://github.com/typicode/json-server).

- **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

- **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

  - **`/components`**: Contains all shared React components, including their respective style and test files.

  - **`/pages`**: Components under _src/pages_ become pages automatically with paths based on their file name. Check out the [pages docs](https://www.gatsbyjs.org/docs/recipes/#creating-pages) for more detail.

  - **`/templates`**: Contains templates for programmatically creating pages. Check out the [templates docs](https://www.gatsbyjs.org/docs/building-with-components/#page-template-components) for more detail.

  - **`/styles`**: Contains global styles, style normalisations and variables.

  - **`html.js`**: For custom configuration of default .cache/default_html.js. Check out the [custom html docs](https://www.gatsbyjs.org/docs/custom-html/) for more detail.

1.  **`/static`**: If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched. Check out the [assets docs](https://www.gatsbyjs.org/docs/static-folder/#adding-assets-outside-of-the-module-system) for more detail.

1.  **`.gitignore`**: Tells [Git](https://git-scm.com/) which files and directories should be excluded from versioning.

1.  **`.prettierignore`**: Tells [Prettier](https://prettier.io/) which files should be excluded from formatting.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`declarations.d.ts`**: Global declarations (necessary to allow scss imports).

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`tsconfig.json`**: TypeScript configurations. Sets up the compiler options, and which folder to include or exclude in when it comes to compiling TypeScript files.

1.  **`tslint.json`**: This config will contain the linting rules for our TypeScript codebase.

## Build process

During the build process Gatsby fetches all data necessary to generate all static sites. The fetched data is stored in an internal store which can be queried with [GraphQL](https://graphql.org).

Start local development on http://localhost:8000 with (use one terminal for each command):

```
make start-mockserver
make start-frontend-dev
```

To generate a production-ready build run:

```
make build-frontend-prod
```

Test the build on http://localhost:9000 with:

```
make start-frontend-prod
```
