<h1>Entertainment Web App</h1>

<div>
    This Project deals with the basic entertainment which user can upload their photo's give caption and comments on those post.

    User can use this app friendly which is customize and easy to handle. 
</div>

<h3>Tech Stack</h3>

<h6>React JS, Node JS, Express, Mongo DB</h6>

<div>Process :</div>

<div>
    1. First part decided to design the layout of the entire components to get userInterface cleanly.by using Material UI design it becomes very easy to define the some components make user to use easily.

    2. Second part decided to store user data in a database. For storing data selected the online storing platform MONGO DB. Build the link of each request of url to link as per the user clicked and stored the data and navigate the to that route as given.

    3. Each Url given CRUD operation by calling the method of GET, POST, PUT, DELETE. which become easy to create, update, and post the data.

    4. Third part decided to Unit test the https request. whatever the link is given to route. all the link is been tested by using the JEST framework. It becomes very easy to test those url which is working or not.

    5. Fourth part decided to merge server and client side.To publish in git repository.

    6. My getting all those data of server and client side which to work on those entities which is correctly working or not and publish in the server.

    7. Find the domain registered and publish the project which is organized and get the domain name and use the application efficiently.

 So, thus the entire process and plan for building the project using Onion architecture method.such as:
    a. UserInterface layer
    b. Service layer [CRUD]
    c. Repository 
    d. Domain registered

</div>

<div>
    <h6>Backend Procedure</h6>

    1. Plan what kind of framework, dependencies, database, need to used.
    2. Installed the package Node "npm install", nodemon, express, mongoose, bcrypt, jwt, cors, ejs   jest.
    3. First created the model of user , mediaPost and comments.Simultaneously make connect to MONGO database.
    4. Created the model and and given their type which kind of area should be stored in the website.
    5. Created the routes for three different models and import those models to each route and make an one root route which actually make a path to get the data.
    6. In route created the url. In those request with the help of requesting method GET,POST, PUT, DELETE and giving the route(path) to the desire way to navigate nad stored the data.
    7. Build CRUD operation to each routes of files such as for user, mediaPost, comments.
    8. And Finally after creating those url request and by importing all the routes to root file which is actually shows the area to navigate the route(path).by using middleware it becomes easy used the navigate. And get the data in json format which actually converts while importing the body-parser and use it by giving to our root file.
    9. Run the server at the local host "NPM START" whether it is working or not. for checking purpose used the postman to send the data and checked is it properly storing in db or not.
    10. After Checking all those areas by sending some token , matching those token to get the data as per id which should be unique and identify the comments and stored those comment perfectly on such post only.    

</div>

<div>
    <h6>Testing :</h6>

    1. By installing JEST framework by npm install "jest" , and to make our execution of our code easy install "superTest".
    2. By importing all superTest, jest amd some dev-dependencies to write the code.
    3. Build the code for each url which is actually used in routes and test whether the data is CRUD as per the test given. 
    4. To check whether the code is running good run the command "npm jest".
    5. It will execute the code and test the code if it success than it will passed the code else it will show  failure.
    6. It becomes very prevention before uploading our link in server side and test sort the error if it fail.
    7. Complete all the unit test codes. 

    After Completing all the server side review the codes well and remove the unwanted things which is not used in the code and make the code very compact and clean which the code is readable.

</div>

<div>
    1. While Clone this project need to install NPM.
    2. Run the server in localhost:2400.
</div>

<div>
    So, thus the entire server side process, procedure for our web application.
</div>