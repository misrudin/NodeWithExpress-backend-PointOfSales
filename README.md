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

#### Before run End Point you must add token in headers, folow this step:
**POST**
* `http://localhost:4001/api/v1/auth/register`
	* ``` { "username": "sample", "password": "****"} ```

**POST**
* `http://localhost:4001/api/v1/auth/login`
	* ``` { "username": "sample", "password": "****"} ```
	//response: {token:xxxx} //copy and paste token into Headers - token

**1. GET**
* `http://localhost:4001/api/v1/product?page=1`
* `http://localhost:4001/api/v1/category`
* `http://localhost:4001/api/v1/cart`


**2. POST**
* `http://localhost:4001/api/v1/product`
    * ``` { "name": "Sambel", "description": "sambel sunda", "price": 1000,"stok": 10,"image":file } ``` // use form-data

* `http://localhost:4001/api/v1/category`
    * ``` { "category": "Minuman"} ```

* `http://localhost:4001/api/v1/cart`
    * ``` { "id_user":1, "id_product":1, "qty":1 }  ```

**3. PATCH**
* `http://localhost:4001/api/v1/product/:id`
    * ``` { "name": "Sambel", "description": "sambel sunda", "price": 1000,"stok": 20,"image":file } ``` // use form-data

* `http://localhost:4001/api/v1/category/:id`
    * ``` { "category": "Minuman"} ```


**4. DELETE**
* `http://localhost:4001/api/v1/product/:id` (Delete product by id)
* `http://localhost:4001/api/v1/category/:id` (Delete category by id)

## Related Project
* [`Hayuu-Cafe-FrontEnd`](https://github.com/misrudin/Front-end-PointOfSales.git)
* [`Hayuu-Cafe-Mobile`](https://github.com/misrudin/PosReactNative.git)

	