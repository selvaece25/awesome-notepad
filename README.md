# Awesome Notepad Application

> This is an Notepad app 

![alt text](https://green-tech2510.slite.com/api/files/~~KW5CedF/Screenshot%202021-07-12%20at%205.02.32%20PM.png)

## Requirements : Here are the decisions and various tech I used to create the app.

- Node.js >= v12
- React >= v16.14
- Typescript >= v4.3.5
- Jest >= v27.0.3
- MongoDb >= v3.6


## Application structure

- `client/` directory - React front end code.
- `server/` directory - Node.js back end code.
- `public/` directory - It will not be processed by webpacks. 

Created by webpack when you run the command `yarn run start`. The Node.js back end serves serves these assets using the
[`express.static`](https://expressjs.com/en/starter/static-files.html#serving-static-files-in-express) middleware.

## Front End Folder Structure
```
└── src
    ├── api
    │   ├── api.js
    ├── components
    │   ├── NoteListItem.tsx
    │   ├── WelcomeNote.tsx    
    ├── constants
    │   ├── appConstants.ts
    │   ├── errorConstants.ts
    ├── shared
    │   ├── Button.tsx
    ├── containers 
    │   ├── TakeNoteApp.tsx
    |── hooks
    │   ├── useNotes.ts
    │   ├── useQuery.ts
    ├── start
    │   ├── StartApp.tsx
    ├── types
    │   ├── index.ts
    |── TestID.ts
    |── index.tsx
    |── style.css
```
## Back End Folder Structure
```
    ├── controllers
    │   ├── notepad.js
    ├── middlewares
    │   ├── error-handler.js   
    ├── models
    │   ├── notepad.js
    ├── presenters
    │   ├── notepad.js
    ├── routes 
    │   ├── notepad.js
    |── validators
    │   ├── notepad.js
    |── app.js
```

## Frontend Testing
Run unit and component/integration tests.

```
yarn run test 
```
![alt text](https://green-tech2510.slite.com/api/files/E5XhbbBhpl/Screenshot%202021-07-12%20at%205.05.32%20PM.png)

## Backend Testing

Run unit tests.

```
yarn run server:test 
```
![alt text](https://green-tech2510.slite.com/api/files/2EOVlsshQP/Screenshot%202021-07-14%20at%2012.19.41%20PM.png)



## Usage

```bash
# Install dependencies for front end and back end
yarn install

# Build front end assets with webpack
yarn run start

Go to localhost:3000 to view the app.

# Run Node.js back end server
yarn run server:start

API requests will be proxied to port 5000 automatically.
```
