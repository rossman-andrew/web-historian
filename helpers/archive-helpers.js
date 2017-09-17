var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  // Read them from "sites.txt"

  fs.readFile(this.paths.list, 'utf8', (err, data) => {
    callback(JSON.parse(data));

  });
  //callback(readList);
};

exports.isUrlInList = function(url, callback) {
  fs.readFile(this.paths.list, 'utf8', (err, data) => {
    if (data.length === 0) {
      console.log('in isUrlInList, sites.txt is empty');
      data = {};
    } else {
      var data = JSON.parse(data);
    }
    var trueFalse = function(value) {
      if (value === undefined) {
        return false;
      } else {
        return true;
      }
    };
    if (callback) {
      callback(trueFalse(data[url]));
    }
  });
};

exports.addUrlToList = function(url, callback) {
  fs.readFile(this.paths.list, 'utf8', (err, data) => {
    if (data.length === 0) {
      //console.log('sites.txt is empty');
      data = {};
    } else {
      var data = JSON.parse(data);
    }

    if (data[url] === undefined) {
      data[url] = false;
      fs.writeFile(this.paths.list, JSON.stringify(data), (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (callback) {
      callback();
    }
  });
};

exports.isUrlArchived = function(url, callback) {

  fs.readFile(this.paths.list, 'utf8', (err, data) => {


    if (callback) {
      callback(data[url]);
    }
  });
};

exports.downloadUrls = function(urls) {

};
