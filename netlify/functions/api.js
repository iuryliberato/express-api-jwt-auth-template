const express = require('express');
const serverless = require('serverless-http');
const expressApp = require('../../server'); // this is your server.js app

const app = express();

// Netlify will call paths like: /.netlify/functions/api/users
// We mount your real app at that base so it sees just "/users", "/auth", etc.
app.use('/.netlify/functions/api', expressApp);

module.exports.handler = serverless(app);