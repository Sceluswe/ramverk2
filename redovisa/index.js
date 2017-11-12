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

app.get("/report", (req, res) => {
    res.render("report", {
        title: "Redovisning",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "Om kursen",
    });
});

// ---------------- Error handlers ----------------
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
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

