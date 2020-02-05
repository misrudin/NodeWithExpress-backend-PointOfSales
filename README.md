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

![lgn](https://user-images.githubusercontent.com/37394664/73808615-228d2a80-4803-11ea-8d5f-245fd6ddae16.png)


#### When I will get all data product, then i do:

Select method `GET` in Postman, and insert the URL.
```
http://localhost:4001/api/v1/product
```

#### For other methods, you can follow the coding in the routers

![login](https://user-images.githubusercontent.com/37394664/73808522-c5917480-4802-11ea-8704-009f02a0cf86.png)

* Auth
* Category
* Product
* Cart
* Checkout
* payment
