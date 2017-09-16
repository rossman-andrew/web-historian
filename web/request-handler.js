var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if(req.method === 'GET' && req.url === '/'){
    // function writeIndex(data){
    //   res.writeHead(200, exports.headers);
    //   res.write(data);
    //   res.end();
    // }
    // var callback = writeIndex.bind(this);
    //httpHelpers.serveAssets(res, '/index.html', callback);
    // res.writeHead(200, httpHelpers.headers);

    //httpHelpers.serveAssets(res, archive.paths.siteAssets + '/index.html', fs.readFile);
    httpHelpers.serveAssets(res, archive.paths.siteAssets + '/index.html', fs.createReadStream);
  }
};
  // else if(req.method === 'POST'){
  //   //go to sites.txt
  //   //console.log("got a post request");
  //   var storage = [];
  //   req.on('data', function(chunk){
  //     storage.push(chunk);
  //   });
  //   req.on('end', function(){
  //     storage = Buffer.concat(storage).toString();
  //     console.log(storage);
  //   });

    /*console.log('input data: ' + storage);
    var sitesList;
    fs.readFile(archive.paths.list, function(err, data){//look at datafile
      if(!data){
        sitesList = '{}';
      }else{
        sitesList = data;
      }
      console.log(sitesList);
    })//fs readFile
    sitesList = JSON.parse(sitesList);//parse
    if(sitesList[searchTerm] === undefined){  //if not found
      sitesList[searchTerm] = false;// add entry to sites.txt
      res.writeHead(404, httpHelpers.headers);// 404
      res.write('Not Found');
    }else if(sitesList[searchTerm]){//if found & in sites folder
      httpHelpers.serveAssets(res, archive.paths.archivedSites + '/' + searchTerm, fs.readFile);// serveAssets 302
    }else if(!sitesList[searchTerm]){//if found & not in sites folder
      res.writeHead(404, httpHelpers.headers);// 404
      res.write('Site has yet to be retrieved');
    }
    fs.writeFile(archive.paths.list, JSON.stringify(sitesList));
        //fs write file
*/


  // setTimeout(() => {
  //   res.end();
  // }, 10);//res.end(archive.paths.list);
// };
