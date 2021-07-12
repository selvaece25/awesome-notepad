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
- `static/` directory - Compiled front end assets. 

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

## Usage

```bash
# Install dependencies for front end and back end
yarn install

# Build front end assets with webpack
yarn run start

Go to localhost:3000 to view the app.

# Run Node.js back end server
npm start

API requests will be proxied to port 5000 automatically.
```
