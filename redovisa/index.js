#!/usr/bin/env node
"use strict";

// run server in production format in windows: set NODE_ENV="production" node index.js

// Create the app objekt
var express = require("express");
var app = express();

const path = require("path");


// Serve static files
var staticFiles = path.join(__dirname, "public");

app.use(express.static(staticFiles));

// Start up server
var envPort = (process.env.DBWEBB_PORT) ? process.env.DBWEBB_PORT : 1337;

console.log("Express is ready.");
console.log("Starting on port: " + envPort);
app.listen(envPort);

// Use app as template engine
app.set('view engine', 'pug');

// Format the code nicely in development.
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

// ---------------- Middleware ----------------
// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

// ---------------- My own routes ----------------
app.get("/", (req, res) => {
    res.render("me", {
        title: "Min me-sida",
    });
});

app.get("/me", (req, res) => {
    res.render("me", {
        title: "Min me-sida",
    });
});

app.get("/test/page", (req, res) => {
    res.render("page", {
        title: "Hey",
        message: "Hello there!"
    });
});

// ---------------- default test routes ----------------
// Add a route


// Testing routes with method
// app.get("/user", (req, res) => {
    // res.send("Got a GET request at " + req.originalUrl);
// });

// app.post("/user", (req, res) => {
    // res.send("Got a POST request at " + req.originalUrl);
// });

// app.put("/user", (req, res) => {
    // res.send("Got a PUT request at " + req.originalUrl);
// });

// app.delete("/user", (req, res) => {
    // res.send("Got a DELETE request at " + req.originalUrl);
// });

// Add a saying hello
// app.get("/hello", (req, res) => {
    // res.send("Hello World");
// });

// Route with dynamic content save in a parameter
// app.get("/hello/:message", (req, res) => {
    // res.send(req.params.message);
// });

// Route that renders template view.
// app.get("/test/page", (req, res) => {
    // res.render("page", {
        // title: "Hey",
        // message: "Hello there!"
    // });
// });

// app.get("/test/:title/:message", (req, res) => {
    // res.render("page", {
        // title: req.params.title,
        // message: req.params.message
    // });
// });

// app.get("/test/home", (req, res) => {
    // res.render("home", {
        // title: "Home"
    // });
// });

// app.get("/test/blog", (req, res) => {
    // res.render("blog", {
        // title: "Blog",
        // posts: [
            // {
                // title: "Blog post 1",
                // content: "Content 1."
            // },
            // {
                // title: "Blog post 2",
                // content: "Content 2."
            // },
            // {
                // title: "Blog post 3",
                // content: "Content 3."
            // },
        // ]
    // });
// });

// app.get("/test/markdown", (req, res) => {
    // res.render("markdown", {
        // title: "Markdown"
    // });
// });

// app.get("/test/markdown-include", (req, res) => {
    // res.render("markdown-include", {
        // title: "Markdown include"
    // });
// });

// Note the error handler takes four arguments
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    err.status = err.status || 500;
    res.status(err.status);
    res.render("error", {
        error: err
    });
});

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
// app.use((req, res, next) => {
// var err = new Error("Not Found");
// err.status = 404;
// next(err);
// });

