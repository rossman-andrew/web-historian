// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var fetch = require('fetch');

exports.htmlfetcher = function() {
  fs.readFile(archive.paths.list, 'utf8', (err, data) => {
    if (data.length === 0) {
      console.log('sites.txt is empty');
      data = {};
    } else {
      var data = JSON.parse(data);
    }
    for (var url in data){
      if(!data[url]){
        //find site
        //download and add to sites archive
        var google = new fetch.FetchStream('www.amazon.com');
        google.on('data', function(err, data){
          console.log(data);
        });
      }
    }

  });
};
