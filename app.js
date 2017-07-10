const express = require('express');
const path = require('path');
const morgan = require('morgan');
const favicon = require('serve-favicon');

var app = express();
app.use(morgan('common'));

app.use(
  express.static(path.join(__dirname, 'public'))
);
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res){
  res.setHeader('Content-Type', "text/html; charset=utf-8");
  res.render('index');
})
app.use(require('./routes/items'));
app.use(require('./routes/operations'));

app.use(function(req, res) {
  res.setHeader('Content-Type', "text/html; charset=utf-8");
  res.statusCode = 404;
  res.end("Página não encontrada.");
})

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("Servidor iniciado em " + app.get('port'));
});
