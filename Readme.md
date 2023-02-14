# Project Management App

Application to manage projects and clients. Allows the user to create projects and assign them to clients that can also be added from the app. The projects have a name, description and status (Not Started, In Progress, Completed or Delayed) while clients have contact information. Both can be deleted or updated and, in case of removing a client, their projects will also be erased. 

It contains the following pages:

  - Home
  - Project
  - NotFound

## Technologies used

- Node & Express
- GraphQL
- MongoDB
- React
- Bootstrap 5

## Setup

This project requires the following dependecies:
    
    "colors": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.2",
    "express-graphql": "^0.12.0",
    "graphql": "^15.8.0",
    "mongoose": "^6.9.1",
    "nodemon": "^2.0.18",
    "@apollo/client": "^3.7.7",
    "graphql": "^16.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-router-dom": "^6.8.1"

To install the project, just download it directly from terminal with "git clone https://github.com/JEDolce/pm-app.git", and then run npm install or yarn add. 

After installing the project you'll need to create the dabatabase on MongoDB and set the environment variables MONGO_URI with your
MongoDB key, NODE_ENV = development and PORT.

