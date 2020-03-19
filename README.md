<h1 align="center">hayuu cafe - Backend Point Of Sales</h1>


Hayuu cafe is an application to manage sales at hayuu cafe. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. xampp)

## How to run the app
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file **.env** in root project folder, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database post, and Import file [note.sql](note.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:4001/api/v1)
8. You can see all the end point [here](#end-point)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
SERVER_PORT = 4001
DB_HOST = "localhost"
DB_USER = "root" //default
DB_PASSWORD = "" //default
DB_NAME = "post"
PRIVATE_KEY = "private"
URL=""
URL_IMG= "http://localhost:4001/" //root project for save image upload
```

## End Point
**1. GET**
* `/product`


**2. POST**
* `/product`
    * ``` { "name": "Sambel", "description": "sambel sunda", "price": 1000,"stok": 10, } ```


**3. PATCH**
* `/note/:id` (Update note by id)
   * ``` { "title": "Party", "note": "Herman's Party at 18.00", "category": 2 } ```


**4. DELETE**
* `/note/:id` (Delete note by id)
