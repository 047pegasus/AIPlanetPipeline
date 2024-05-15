//Write an application to launch a server at port 3000 and return a response with a message "Welcome to AI Planet Canary Release 1.0" when the server is hit with a request on "/" endpoint. Also make sure to add two more endpoints in the application which will return information about the proejct i.e. "The proehct is a simple web server backend application to be deployed for the internship assignment of AI Planet by Tanishq Agarwal on Kubernetees Cluster running ✅" and my contact details including email and author name when the server is hit with a request on "/about" and "/contact" endpoints respectively.

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to AI Planet Internship Test Web Application Canary Release 1.0");
});

app.get('/about', (req, res) => {
    res.send("The project is a simple web server backend application to be deployed for the internship assignment of AI Planet by Tanishq Agarwal on Kubernetees Cluster running ✅");
});

app.get('/contact', (req, res) => {
    res.send("Author: Tanishq Agarwal \nEmail: tanishqoct11@gmail.com");
});

//New Feature for Canary Release 1.1
app.get('/newfeature', (req, res) => {
    res.send("This is a new feature added in the Canary Release 1.1");
});

app.listen(7788, () => {
    console.log("Server started at port 7788");
});


