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

## Mongo DB

1. Install Mongo Db on your machine either by running its installation command or downloading from Mongo website.

    ```powershell
        choco install mongodb
    ```

2. Run Mongo shell from "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"

### Some useful commands

1. To create a database

    ```powershell
        use my-blog
    ```

2. In MongoDb each database is composed of a few or many **Collections**. These collections can contain any number of JSON objects (a.k.a documents).
   1. Collection name: articles
   2. documents (array of objects): each JSON object is a document

    Our javascript object:

    ```javascript
        const articlesInfo = {
            'learn-react': {
                upvotes: 0,
                comments: [],
            },
            'learn-node': {
                upvotes: 0,
                comments: [],
            },
            'my-thoughts-on-resumes': {
                upvotes: 0,
                comments: [],
            },
        };
    ```

    Insert into our MongoDb collection:

    ```MongoShell
        > db.articles.insert([{
            name: 'learn-react',
            upvotes: 0,
            comments: [],
        }, {
            name: 'learn-node',
            upvotes: 0,
            comments: [],
        }, {
            name: 'my-thoughts-on-resumes',
            upvotes: 0,
            comments: [],
        }])
    ```

3. **Query data**

    1. To see *all documents*

        ```MongoShell
            > db.articles.find({})
        ```

        Or to see it in a readable format use .pretty() 

        ```MongoShell
            > db.articles.find({}).pretty()
        ```

    2. To query *one document*

        ```MongoShell
            > db.articles.find({ name: 'learn-react' }).pretty()
        ```

        Or use .findOne() without .pretty()

        ```MongoShell
            > db.articles.findOne({ name: 'learn-react' })
        ```
