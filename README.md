# StackerFlow
A simple Q&A platform. People can ask questions and receive comments and upvotes from peer users.

## Technology Stack
- JavaScript ([ES6](http://es6-features.org/))
- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Firebase DB](https://firebase.google.com/)

## Setup
- Make sure to have [Node.js](https://nodejs.org/en/) installed
- Configure Facebook and Firebase properly. Read the [manual and do steps 1 to 3c](https://firebase.google.com/docs/auth/web/facebook-login). Open ```config/config.example.json```, fill out all fields, and rename the file to ```config/config.json```.
- Import ```config/db-schema-firebase.json``` into Firebase.
- Install all dependencies by running ```$ sudo npm install```
- Run ```$ npm run build:watch```
- In a new tab, run ```$ npm start```
- Check your browser on ```localhost:3000```
