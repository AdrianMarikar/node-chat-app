var socket = io();

		socket.on('connect', function () {
			console.log('Connected to server');

			// socket.emit('createMessage', {
			// 	from:'Laura',
			// 	text: 'Hey. this is Laura.'
			// });
		});

		socket.on('disconnect', function () {
			console.log('Disconnected from server');
		});


		socket.on('newMessage', function (message) {
			console.log('NewMessage:', message);
		});