/**
 * Created by lenovo on 2017/11/29.
 */
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.set('views', path.join(__dirname , '../example') );
app.set('view engine', 'tpl');
app.engine('.tpl', require('ejs').__express);

app.get('/', function(req, res) {
  res.render('./view.tpl', {name: 'world555'});
});

app.use(express.static('../example'))

app.listen(3000, function() {
  console.log('server start at: localhost:3000');
});