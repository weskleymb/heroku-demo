const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/heroku-demo'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/heroku-demo/index.html');
});

app.listen(process.env.PORT || 4200);
