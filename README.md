Get YouTube Subscribers - Backend Capstone Project -: First install npm dependencies of express and mongoose using npm install command. Start the backend server using npm start or node src/index.js command. We are using MONGODB CLOUD for database HTTP request methods used in the project GET http://localhost:3000/ → The client will see the “almabetter capstone project by Kunal Tripathy and Srikanta kumar Rout” message which is used to verify that application is working properly.

GET http://localhost:3000/subscribers → When the user hit this, *endpoint /subscribers, the client will *get an array of all subscribers in JSON format from the database where the data is stored in local MongoDB database.

GET http://localhost:3000/subscribers/name →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local MongoDB database.

GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local MongoDB database.

GET http://localhost:3000/subscribers/:id → When the client gives incorrect USER’S ID instead of correct USER’S ID (where the ID does not match) which is stored in database, the Client will get an Error message like“ Subscriber doesn't exist with the given _id: sdijvrbv” in JSON format with 400 error status code.

GET http://localhost:3000/something → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.

post http://localhost:3000/subscribers/add → when the user hit this, endpoint /subscribers/add in adding subscribers using adding data

Delete http://localhost:3000/subscribers/delete/id → when the user hit , */subscribers/delete/id(using youtube subscriber id) delete the subscribers using subscriber I'd

We are getting results from Mongo DB Atlas Cloud but not Heroku app as it was not clearly explained in our online classes. We tried our best to deploy the project on Heroku but somehow some Application Error is coming up, therefore its not working on Heroku deployment link. But its working perfectly fine on vscode with MongoDB atlas cloud (please note: its working perfectly fine on MongoDB Atlas Cloud as well as on local system)

Note: If the wrong :id is entered in the url, then the client will encounter 400 Bad Request status code indicating that the server cannot or will not process the request due to something that is perceived to be a client error.

app.use() is used to handle all the unwanted requests. It will return 404 Not Found status code indicating that the requested resource could not be found but may be available in the future.
