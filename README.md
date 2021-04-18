## Example of Fullstack Internet store App (`React`, `Node.js` etc.) by [Ulbi TV Youtube video](https://youtu.be/H2GCkRF9eko)
___

Install local database application [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Create `client` and `server` folders for client and server code

### Begin server part of App
1. Create `index.js` into `server` folder
2. Init `server` folder (created `package.json` file):
   ```
   # cd server
   # npm init -y
   ```
1. Install necessary for App packages:
   ```
   # npm i express pg pg-hstore sequelize cors dotenv
   ```
   express - Node.js framework for make web-server;
   pg - PostgreSQL client for Node.js;
   pg-hstore - serializing and deserializing JSON data to hstore format for PostgreSQL;
   sequelize - promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server;
   cors - express middleware to enable CORS (Cross-Origin Resource Sharing);
   dotenv - zero-dependency module for loading environment variables from a `.env` file into `process.env`
1. Install packages for development:
   ```
   # npm i -D nodemon
   ```
   nodemon - tool that helps by automatically restarting the node.js App when file changes in the directory are detected
   Add run-script for development into `package.json`:
    ```json
    "scripts": {
      "dev": "nodemon index.js"
    }
    ```
1. Create `.env` file for environment variables:
    ```javascript
    PORT = 5000
    ```
2. Into `index.js`
   1. import environment variables from `.env` file to `process.env`
      ```javascript
      require('dotenv').config()
      ```
   2. import `express` framework
      ```javascript
      const express = require('express')
      ```
   3. set the value of server's port:
      ```javascript
      const PORT = process.env.PORT || 5000
      ```
   4. create instance of `express`
      ```javascript
      const app = express()
      ```
   5. start web-server:
      ```javascript
      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
      })
      ```
3. Create `db.js` file connecting to database
4. Add into `.env` file environment variables for database connection:
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=online_store
    DB_USER=postgres
    DB_PASSWORD=root
    ```
5. Create database connection into `db.js`
    ```javascript
    const { Sequelize } = require('sequelize')
    require('dotenv').config()

    module.exports = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
      }
    )
    ```
6. Import database connection from `db.js` to `index.js` file:
    ```javascript
    const sequelize = require('./db')
    . . .
    const startDbConnection = async () => {
      try {
        await sequelize.authenticate()
        await sequelize.sync()
        
        app.listen(PORT, () => {
          console.log(`Server started on port ${PORT}`)
        })
        
      } catch (e) {
        console.error(e)
      }
    }

    startDbConnection()
    ```
7. Create ORM models (database table) into `models/models.js`
1. Import models into `index.js` (PostgreSQL create tables at App starts):
    ```javascript
    const models = require('./models/models')
    ```
1. Add CORS and JSON middleware into `index.js`:
    ```javascript
    const cors = require('cors')
    . . . 
    app.use(cors())
    app.use(express.json())
    ```
1. For testing purposes create into `index.js` first endpoint:
    ```javascript
    app.get('/', (request, response) => {
      response.status(200).json({message: 'Backend works!..'})
    })
    ```
   _Test and delete it..._
1. Create `routes` folder with separate routers JS files and `index.js` for combine its.
   Import `routes/index.js` into `index.js` and add middleware:
    ```javascript
    const router = require('./routes')
    . . .
    app.use('/api', router)
    ```
1. Create `controllers` folder for routers controllers (functions which run at each router).
   Import each controller into the corresponding router file
1. Create custom handling error middleware:
    1. create custom `ApiError` class extends `Error` into `error/ApiError.js`
    1. use `ApiError` class into `middleware/ErrorHandlerMiddleware.js`
    1. import and use it middleware into main `index.js`
   > Warning!
   > 
   > Important to register error handler middleware the last!
   >
   > (without using `next()` inside)
1. For upload device images install `express-fileupload` npm package.
   Import it into main `index.js` and use as `express` middleware:
    ```javascript
    const fileUpload = require('express-fileupload')
    . . .
    app.use(fileUpload({}))
    ```
1. For generate unique image file name install `uuid` npm package
1. Create `static` folder for uploaded images.
   Add `express` middleware into main `index.js` for resolve static files (images):
    ```javascript
    const path = require('path')
    . . .
    app.use(express.static(path.resolve(__dirname, 'static')))
    ```
1. User controller use JWT
1. 54:33
