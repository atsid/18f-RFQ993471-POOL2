"use strict";
let express = require("express");
let jefferson = require("express-jefferson");

module.exports = jefferson.router({
    routes: {
        "/": {
            get: [
                (req, res, next) => {
                    res.send("Hello!");
                    next();
                }
            ]
        }
    }
});