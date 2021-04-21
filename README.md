## Example of Fullstack Internet store App (_React.js_, _Node.js_ etc.) by [*Ulbi TV* Youtube video](https://youtu.be/H2GCkRF9eko)
___

Install local database application [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Create `client` and `server` folders for client and server code

## *Server* part of App
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
   **express** - Node.js framework for make web-server;
   
   **pg** - PostgreSQL client for Node.js;
   **pg-hstore** - serializing and deserializing JSON data to hstore format for PostgreSQL;
   
   **sequelize** - promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server;
   
   **cors** - express middleware to enable CORS (Cross-Origin Resource Sharing);
   
   **dotenv** - zero-dependency module for loading environment variables from a `.env` file into `process.env`
   
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
   For generate unique image file name install `uuid` npm package 
   Create `static` folder for uploaded images. 
   Add `express` middleware into main `index.js` for resolve static files (images):
    ```javascript
    const path = require('path')
    . . .
    app.use(express.static(path.resolve(__dirname, 'static')))
    ```
1. User controller use JWT for authorization/authentication/
   Install the necessary npm packages:
    ```
    # npm i jsonwebtoken bcrypt
    ```
   Put Server secret key for second parameter of `jwt.sign()` function into `.env` file.
   For implementation `GET /auth` route for `user` create `authMiddleware.js` and add it as second parameter:
    ```javascript
    const auth = require('../middleware/authMiddleware')
    . . .
    router.get('/auth', auth, userController.check)
    ```
1. Add checking roles.
   Create `checkRoleMiddleware.js` and add it as second parameter in `POST /` of `type` route.
1. TODO: add checking role for other entities, add delete functions and so on...
___
## *Client* part of App
1. Into `client` folder create React application:
    ```
    # cd client
    # npx create-react-app .
    ```
   Delete all unnecessary.
1. Install necessary packages:
   ```
   # npm i axios react-router-dom mobx mobx-react-lite
   ```
   **axios** - Promise based HTTP client;
   
   **react-router-dom** - DOM bindings for React Router;
   
   **mobx** - state management;
   
   **mobx-react-lite** -  lighter version of mobx-react which supports React functional components only.
   
1. Install Bootstrap for React:
    ```
    # npm i react-bootstrap bootstrap
    ```
   Import bootstrap css into `index.js` file
1. Create into `client/src` the following folders: `store`, `pages` and `components`
1. Into `pages` folder create the following files with React component: `Admin.js`, `Auth.js`, `Basket.js`, `Device.js` and `Shop.js`
1. Create into `components` folder `AppRouter.js` file.
   
   Import `Switch`, `Route` & `Redirect` from `react-router-dom`:
    ```javascript
    import { Switch, Route, Redirect } from 'react-router-dom'
    ```
   Into `App.js` wrap `<AppRouter />` component by `<BrowserRouter>` from `react-router-dom`.
1. Create `src/routes.js` file with routes definition.
   
   `authRoutes` - array of routes which require authorization and
   
   `publicRoutes` - array of public routes.
   
    Put all constants into `utils/consts.js` file
1. Finalize `AppRouter.js` component
1. Create `store/UserStore.js` file for `User` store definition
1. Into main `index.js` import `createContext` function from `react` and wrap `<App>` component in the `<Context.Provider>` component.

   Add to value of `<Context.Provider>` object instance of `UserStore` class
   ```javascript
   <Context.Provider
      value={{
         user: new UserStore()
      }}
   >
      <App />
   </Context.Provider>
   ```
2. After that `isAuth` variable value get in the `AppRoute` component from the `user` store of `Context`:
   ```javascript
   const { user } = useContext(Context)

   return (
      <Switch>
         {user.isAuth &&
   . . .
   ```
1. Create `store/DeviceStore.js` file for `Device` store definition.
   Import `DeviceStore` into main `index.js` and add `device` store into `<Context.Provider>`
1. Create layout of App's client part
   1. сreate `<NavBar>` component based on example of `Navbar` react-bootstrap component;
   2. фdd `<NavBar />` into `App.js`;
   3. replace bootstrap `<Nav.Link>` with `<Button>`;
   4. wrap `<NavBar>` component in the `observer()` function from the `mobx-react-lite` pakage.
1. Create `<Auth>` component representing registration and authorization page
1. Create `<Shop>` component representing home/main page
    1. Create `<TypeBar>` component with `<ListGroup>` from 'react-bootstrap';
    2. Create `<BrandBar>` component
    3. Create `<DeviceList>` component by first creating `<DeviceItem>`
 1. Create `<Device>` component representing selected device page
 1. Create `<Admin>` component representing administrative page.
    1. Create `components/modals` for modal components based on `Modal` 'react-bootstrap';
    1. Modal `<CreateDevice>` use `<Form>` with `<Dropdown>` from 'react-bootstrap';
    1. Add to modal `<CreateDevice>` dynamical characteristic list.
___
## Connecting *Client* and *Server* parts of App
1. Create `.env` file for required environment variables

   Environment variables into `.env` file must be starts with `REACT_APP_`

   Maybe needed restart `npm start` script

1. Create `http` folder with `index.js` file into `client/src` folder for create `express` instance
1. Create into `http` folder `userAPI.js` file for user registration, authorization and token validation
1. Install `jwt-decode` npm package (small browser library that helps decoding JWTs token which are Base64Url encoded)
   ```
   # npm i jwt-decode
   ```

2:07:00
