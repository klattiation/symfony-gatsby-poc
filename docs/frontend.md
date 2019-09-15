[Home](../README.md)

# Frontend

The frontend is build with the static site generator [Gatsby](https://www.gatsbyjs.org/), which is built on top of [React.js](https://reactjs.org/).

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

  - **`html.js`**: For custom configuration of default .cache/default_html.js. Check out the [custom html docs](https://www.gatsbyjs.org/docs/custom-html/) for more detail.

1.  **`/static`**: If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched. Check out the [assets docs](https://www.gatsbyjs.org/docs/static-folder/#adding-assets-outside-of-the-module-system) for more detail.

1.  **`.gitignore`**: Tells [Git](https://git-scm.com/) which files and directories should be excluded from versioning.

1.  **`.prettierignore`**: Tells [Prettier](https://prettier.io/) which files should be excluded from formatting.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## Build process

During the build process Gatsby fetches all data necessary to generate all static sites. The fetched data is stored in an internal store which can be queried with [GraphQL](https://graphql.org).

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
