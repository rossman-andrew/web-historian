var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  // fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data){
  //   //console.log(data);
  //   res.writeHead(200, httpHelpers.headers);
  //   res.end(data);
  // });
  // *** LOOK AT MIME-TYPES LIBRARY FOR GRABBING THE CSS **

  var result = callback(asset).pipe(res);
  result.on('end', function() {
    res.writeHead(200, this.headers);
    res.end();
  });

  // callback(asset, function(err, data) {
  //   res.writeHead(200, exports.headers);
  //   res.write(data);
  // });

};



// As you progress, keep thinking about what helper functions you can put here!
