// netlify/functions/api.js
const serverless = require('serverless-http');
const app = require('../../server'); // go up twice to reach server.js

module.exports.handler = serverless(app, {
  basePath: '/.netlify/functions/api',
});
