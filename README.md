# rssb-challenge

Quick Coding Test

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Installation, Running and deployment for more details. This Application is built in nodejs with es6.

## Prerequisites

This project is built in node js with ES6 format. To get up the application running you need to install the following:

```
download the latest version of node js
```

## Installing

You have to follow the follow this procedure to get started.

Go to the Version control and clone down the application

```
git clone https://github.com/harerakalex/rssb-challenge.git
```

To install all required dependecy `run yarn install`

```
yarn install
```

`The server will automatically install all the needed packages in the application`

You need a testing environment like **POSTMAN**

`For getting data from the app you will have to access every single API endpoint like localhost:3000/api/v1/`

| URL               | METHOD | DESCRIPTION                              |
| ----------------- | ------ | ---------------------------------------- |
| /users            | GET    | Read the file and display all users      |
| /users/validation | GET    | Display the list with valitions          |
| /users            | POST   | Save all user in the database            |
| /users/token      | GET    | To get a token to use for authentication |

> > Note that All these endpoints need to be accessible only via a JWT Token-based
> > authentication and you need to provide excel file in order to test them.

## To run The project

For nodemon use `npm run dev` or `yarn run dev`

```
yarn run dev
```

## Built With Javascript/Typescript

Node/Express

### LICENSE

ISC License
Copyright (c) 2019 `Carlos HARERIMANA`
Open source software
