var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@ds111804.mlab.com:11804/traning',{
    useMongoClient: true
});
var db = mongoose.connection;

db.on('error', function (err) {
    //log.error('connection error:', err.message);
});

db.once('open', function callback () {
    // log.info("Connected to DB!");
    //console.log(db.getCollectionNames());
});


