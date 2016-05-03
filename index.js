var express = require("express")
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
app.use("/public", express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));
app.get('/', function(req, res){res.sendFile(__dirname + '/index.html');});

io.on('connection', function(socket){console.log('Nueva conexion generada' + socket);});

io.on('connection', function(socket){socket.on('chat message', function(msg){console.log('Data del sensor 1 recibido: ' + msg);});});

io.on('connection', function(socket){socket.on('chat message', function(msg){io.emit('chat message', msg);});socket.on('tmp message', function(msg){io.emit('tmp message', msg);});});

http.listen(3000, function(){console.log('Servidor corriendo en el puerto 3000 - localhost - HYDRACRUX');});
