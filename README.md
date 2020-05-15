# My Blog Backend

## Create project

```powershell
    npm init -y
    npm install --save express
```

## Babel support

To make Node support ES6 for us:

```powershell
    npm install --save @babel/core @babel/node @babel/preset-env
```

To tell babel how to transpile our ES6 code into common js code that Node JS can execute. (.babelrc)

```json
{
    "presets": ["@babel/preset-env"]
}
```

## To start our server

```powershell
    npx babel-node src/server.js
```

## Body parser

To parse body of a POST request.

```powershell
    npm install --save body-parser
```

## Server watcher

Whenever your files change, your page will be automatically refreshed.

First install *nodemon* package:

```powershell
    npm install nodemon --save-dev
```

Second, run your server using this command:

```powershell
    npx nodemon --exec npx babel-node src/server.js
```
