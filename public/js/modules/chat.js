/**
 * @author Nate Johnson
 */
define(['angular', 'socket', 'domReady!'], function() {
	var socket = io.connect();

	angular.module('chatApp', []).controller('chatCtrl', function($scope, $timeout) {
		$scope.messages = [];
		
		$scope.chat = function(txt) {
			var msg = {
				sender : 'testguy',
				msg : txt
			};
			
			$scope.messages.push(msg);
			socket.emit('chat', msg);
			
			$scope.msg = '';
		};
		
		socket.on('chat', function(msg) {
	 		$timeout(function() {
		 		$scope.messages.push(msg);
	 		}, 100);
	 	});
	});
}); 