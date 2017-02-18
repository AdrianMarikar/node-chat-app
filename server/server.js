const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
			console.log('New user connected');

			socket.emit('newMessage', {
				from: 'adrian',
				text: 'Hey, what is going on',
				createdAt: 123
			});

			socket.on('createMessage', (message) => {
				console.log('createMessage: ', message);
				io.emit('newMessage', {
					from: message.from,
					text: message.text,
					createdAt: new Date().getTime()
				});
			});

			socket.on('disconnect', () => {
				console.log('User was disconnected');
			});
		});

//listen for requests
server.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};
