module.exports = function (socket) {
	socket.on('chat', function (msg) {
		// broadcast new msg to all users
		socket.broadcast.emit('chat', msg);
	});
};