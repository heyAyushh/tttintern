var axios = require("axios");
var _ = require("lodash");

function mapaf(wordsDict) {
  var data = Object.keys(wordsDict).map(function(key) {
    return {
      word: key,
      count: wordsDict[key]
    };
  });

  return data;
}

module.exports = function(context, req, res) {
  context.log("JavaScript HTTP trigger function processed a request.");
  if (req.query.n) {
    var n = req.query.n;

    axios.get("http://terriblytinytales.com/test.txt").then(function(response) {
      var text = response.data.replace(/[^\w\s]/gi, "");
      var words = text.split(/\s+/);
      var wordsDict = {};
      words.forEach(function(key) {
        if (wordsDict.hasOwnProperty(key)) {
          wordsDict[key]++;
        } else {
          wordsDict[key] = 1;
        }
      });

      var result = mapaf(wordsDict);
      result = _.sortBy(result, "count").reverse();
      result = _.take(result,n);

      context.res = {
        status: 202,
        body: result
      };
      context.done();
    });
  } else {
    context.res = {
      status: 400,
      body: "Please pass a number in request Body."
    };
    context.done();
  }
};
