# NodeWithExpress - Backend
First Project-Task Week 1

## Running The Program
make sure `xampp mysql` is active, 
import database `post` to phpmyamin
```
$ nmp install
$ node app.js
```
### Run the method below using `postman`
[Download Postman](https://www.postman.com/) - To test `GET` `POST` `PATCH` and `DELETE` method.
#### Example method
Login to get the valid Token.

Select method `POST` `http://localhost:4001/api/v1/auth/login`

Copy valid token and paste to Headers, don't forget to create key: my-token.

screensoot


#### When I will get all data product, then i do:

Select method `GET` in Postman, and insert the URL.
```
http://localhost:4001/api/v1/product
```

#### For other methods, you can follow the coding in the routers

screenshoot

* Auth
* Category
* Product
* Cart
* Checkout
* payment
