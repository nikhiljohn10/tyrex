var http = require('http'),
    router = require('./router.js'),
    events = require('./events.js');

http.createServer(function (req, res) {
    router.init(req, res);
    router.route('get', '/test', function () {
        console.log('in test');
    });

    router.route('get', '/get-events', function (req, res) {
        events.getEventList(null, null, null, function (status, data) {
           console.log(status)
           console.log(data)
        });
    });


}).listen(4001);

console.log('App running on port 4001');