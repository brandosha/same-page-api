var WebSocketServer = require('websocket').server;
var http = require('http');
var mysql = require('mysql');

var options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}

var server = http.createServer(function(request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
  response.write(JSON.stringify(options))
});
server.listen(1337, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

function checkNewMessages() {

}

// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);

  setInterval(checkNewMessages, 15000)

  // This is the most important callback for us, we'll handle
  // all messages from users here.
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      // process WebSocket message
    }
  });

  connection.on('close', function(connection) {
    // close user connection
  });
});
