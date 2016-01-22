var express = require('express');
var fortune = require('fortune');
var nedbAdapter = require('fortune-nedb');
var jsonapi = require('fortune-json-api');



// Beállítjuk a JSON API serializer-t
var store  = fortune({
    adapter: {
        type: nedbAdapter,
        options: { dbPath: __dirname + '/.db' ,
            primaryKeyType: Number
        }
    },
    serializers: [{ type: jsonapi }]    
});
var server = express();
// Express middleware

// Minden URL-ről engedélyezzük a hozzáférést az API-hoz
// Mindenképp a `server.use(fortune.net.http(store));` sor elé kerüljön
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
                    
    next();
});
server.use("/public", express.static(__dirname+ 'public'));
server.use(fortune.net.http(store));
store.defineType('class', {
    name: {type: String},
    dayOfWeek: {type: Number},
    hour: {type: Number},
    length: {type: Number},
    user: { 
        link: 'user',
        inverse: 'class',
        isArray: false
    }
});

store.defineType('user', {
    name: {type: String},
    username:{type: String},
    password:{type: String},
    surname:{type: String},
    forename:{type: String},
    email:{type: String},
    "class": { 
        link: 'class',
        inverse: 'user',
        isArray: true
    }
});

// Csak akkor fusson a szerver, ha sikerült csatlakozni a tárolóhoz
// Hasonlóan a Waterline-hoz
var port = process.env.PORT || 8080;
store.connect().then(function () {
    server.listen(port, function () {
        console.log('JSON Api server started on port ' + port);
    });
});


/*

var express = require('express');
var fortune = require('fortune');
var nedbAdapter = require('fortune-nedb');
var jsonapi = require('fortune-json-api');
// Új tároló (alapértelmezetten memóriában tárol)
var store = fortune({
    
    adapter:{
        type:nedbAdapter,
        options:{dbPath: __dirname + '/db'}
        
         
    },
    
    serializers: [{ type: jsonapi }]   
    
    
});

var server = express();
// Express middleware
server.use(fortune.net.http(store));
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});*/
/*store.defineType('person',{
    fname:{type:String},
    lname:{type:String},
    birthday:{type:Date}
    
});
*//*
store.defineType('error',{
    location:{type:String},
    description:{type:String},
    date:{type:String},
    status:{type:String}
     
});


store.connect().then(function () {
    var port = process.env.PORT || 8080;
    server.listen(port, function () {
        console.log('JSON Api server started on port ' + port);
    });
});*/