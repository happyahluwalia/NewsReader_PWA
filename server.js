// https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
const compression = require('compression');
const path = require('path');
const express = require('express');
const app = express();

// Use compression
app.use(compression());
// Run the app by serving static files in dist
app.use(express.static(__dirname + '/dist'));

// If an incoming requests anything other than https
// then force it to use https
const ForceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.contentType(req.params.file);
      return res.redirect(['https://', req.get('Host') + req.url].join(''));
    }
    next();
  }
}

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//Start the app using default heroku port of 8080
app.use(ForceSSL());
app.listen(process.env.PORT || 8080);
