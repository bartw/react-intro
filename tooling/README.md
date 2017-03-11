# Tooling

I will set up a development environment for creating a basic React application. This environment will be used in the other examples.

## Quickstart

If you don't want to do everything below you can just clone this repo and run npm install and npm start on this folder.

Or type the following commands in a shell and copy the file content to the created files.

```shell
mkdir tooling
cd tooling
npm init -y
npm install --save-dev babel-core babel-preset-es2015 babel-preset-react
npm install --save-dev webpack babel-loader
npm install --save-dev webpack-dev-server
npm install --save react react-dom
touch .babelrc webpack.config.js
mkdir public
touch public/index.html
mkdir src
touch src/index.js
```

## Project

First I create a new folder to keep the project files in.

```shell
mkdir tooling
cd tooling
```

Then I create a new project file using npm.

```shell
npm init -y
```

## Dev dependencies

I'm going to use ES6 and JSX syntax to write code so I need Babel to transpile this to ES5 so that most browsers understand the code.

```shell
npm install --save-dev babel-core babel-preset-es2015 babel-preset-react
```

Configuartion for Babel is easy. I only need to specify that I want to use ES2015 (ES6) and React in a .babelrc file.

```
{
    "presets": [
        "es2015",
        "react"
    ]
}
```

To bundle all the code into one file I use Webpack, because I use Babel I will also need a Babel loader to tell Webpack to first transpile the code before bundling.

```shell
npm instal --save-dev webpack babel-loader
```

I will also use Webpack dev server to see all changes very fast.

```shell
npm install --save-dev webpack-dev-server
```

Configuration for webpack is put into a webpack.config.js file.
I specify that I want source maps to enable debugging, where my entry file is, where I want Webpack to output my bundle and what extensions to parse and what loaders to use.

```js
var path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
```

## Dependencies

For creating React applications I need 2 modules, react and react-dom.

```shell
npm install --save react react-dom
```

## Scripts

To easily start a dev server and do a build I will create 2 scripts in my package.json file.

```json
"scripts": {
    "start": "webpack-dev-server --progress -d --colors --content-base ./public",
    "build:dev": "webpack"
  }
```

## Html

I will need an index.html in the public folder to be the start of my single page application. I will load the bundled javascript file from there.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello world</title>
</head>

<body>
    <h1>Hello world</h1>
    <script src="bundle.js" type="text/javascript"></script>
</body>

</html>
```

## Javascript

Now all that is left is an index.js in the src folder to have React ready application.

```js
console.log('hello world');
```

## Run it

I can start this application by running the start script and browsing to http://localhost:8080.

```shell
npm start
```