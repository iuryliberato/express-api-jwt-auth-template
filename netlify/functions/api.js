// netlify/functions/api.js
const serverless = require('serverless-http');
const app = require('../../server'); // server.js in the root

// Netlify invokes paths like: /.netlify/functions/api/api/users
// basePath strips "/.netlify/functions" so Express sees "/api/users"
module.exports.handler = serverless(app, {
  basePath: '/.netlify/functions',
});