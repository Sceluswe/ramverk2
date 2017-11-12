#!/usr/bin/env node
"use strict";

// Create the app objekt
var express = require("express");
var app = express();

const path = require("path");

// Serve static files
var staticFiles = path.join(__dirname, "public");
app.use(express.static(staticFiles));

// Add a route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Start up server
console.log("Express is ready.");
app.listen(1337);

// Testing routes with method
app.get("/user", (req, res) => {
    res.send("Got a GET request at " + req.originalUrl);
});

app.post("/user", (req, res) => {
    res.send("Got a POST request at " + req.originalUrl);
});

app.put("/user", (req, res) => {
    res.send("Got a PUT request at " + req.originalUrl);
});

app.delete("/user", (req, res) => {
    res.send("Got a DELETE request at " + req.originalUrl);
});