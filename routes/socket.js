module.exports = function (socket) {
	socket.on('chat', function (msg) {
		// broadcast new msg to all users
		console.log('msg', msg);
		socket.broadcast.emit('chat', msg);
	});
};