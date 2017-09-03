const express = require('express');
const path = require('path'); // модуль для парсинга пути
// const log = require('./back/libs/log');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
require('./libs/mongoose');
const Card = require('./models/card');


app.use(bodyParser.json());
app.use(routes);
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.send('API is running');
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});

app.use(function(req, res, next){
    res.status(404);
    //log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    //log.error('Internal error(%d): %s',res.statusCode,err.message);
    console.log('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

app.get('/ErrorExample', function(req, res, next){
    next(new Error('Random error!'));
});


// var winston = require('winston');
// winston.info('Hello distributed log files!');