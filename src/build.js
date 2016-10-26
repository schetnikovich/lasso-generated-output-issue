require('./configure');

var path = require('path');
var lasso = require('lasso');

var packagePath = path.join(__dirname, "pages/index/browser.json");
var from = path.join(__dirname, "pages/index");

lasso.lassoPage({
    name: "index",
    packagePath: packagePath,
    from: from
  },
  function(err, lassoPageResult) {
    if (err) {
      console.log('Failed to lasso page: ', err);
      return;
    }

    console.log('Page processed!');
  }
);
