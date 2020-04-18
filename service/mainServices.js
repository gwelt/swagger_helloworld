'use strict';


/**
 *
 * returns String
 **/
exports.getBlabla = function() {
  return new Promise(function(resolve, reject) {
    var examples = []; //[{"text":"Just the example."}];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve({"text":"Hello World!"});
    }
  });
}

