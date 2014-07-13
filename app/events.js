'use strict';

var mongodb = require('mongodb'),
    Db = mongodb.Db,
    MongoClient = mongodb.MongoClient,
    Server = mongodb.Server,
    db = new Db('mozkal', new Server('localhost', 27017), {safe:true}),
    events;


db.open(function (err, db) {
    if (err) {
        console.log('Error connecting to the database.')
        return false;
    }
});

function getEventList(dateStart, dateEnd, keyword, callback) {
    console.log('here')
    db.collection('events', function (error, events) {
        events.find({}).toArray(function (error, docs) {
            if (error) {
                callback(false);
            } else if (docs) {
                callback(true, docs);
            }
        });
    });
}

exports.getEventList = getEventList;