"use strict";

var jsdom = require("jsdom");


// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.parentWindow;
global.navigator = window.navigator;

var chai = require("chai");
global.expect = chai.expect;
global.assert = chai.assert;