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
