## Example of Fulstack Internet store App (`React`, `Node.js` etc.) by [Ulbi TV Youtube video](https://youtu.be/H2GCkRF9eko)

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
3. Create `db.js` file connecting to database (install application [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) independently)
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
7. 
