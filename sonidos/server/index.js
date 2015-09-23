var express = require("express"),
    app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use("/mp3", express.static(__dirname + '/mp3'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  /*socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });*/
	socket.on('play', function(id){
		console.log(id);
		io.emit('_play', id);
  	});
	socket.on('stop', function(id){
		console.log(id)
		io.emit('_stop', id);
  	});

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
