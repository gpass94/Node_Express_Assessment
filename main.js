const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
   let output  = loremIpsum({
    count: 3
  ,  units: 'paragraph'

  ,paragraphLowerBound: 3
  ,paragraphUpperBound:7
  ,format: 'html'
  });



app.get('/hello/:name', function (req, res) {
  res.send(output);
});
  app.listen(3000, function(){
  console.log("This works");
});
