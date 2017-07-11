const express = require('express');
const http    = require('http');
const path    = require('path');
const logger  = require('morgan');
const favicon = require('serve-favicon');
const reload  = require('reload');

const app = express();
const server = http.createServer(app);
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 3000);
app.use(logger('common'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res){
  res.setHeader('Content-Type', "text/html; charset=utf-8");
  res.render('index', { title: 'Instruções'});
})
app.use(require('./routes/items'));
app.use(require('./routes/operations'));

app.use(function(req, res) {
  res.setHeader('Content-Type', "text/html; charset=utf-8");
  res.statusCode = 404;
  res.end("Página não encontrada.");
})
reload(app);
server.listen(app.get('port'), function(){
  console.log("Aplicação iniciada em " + app.get('port'));
});
