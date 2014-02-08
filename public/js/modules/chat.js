/**
 * @author Nate Johnson
 */
define(['angular', 'domReady!'], function() {
	var chatApp = angular.module('chatApp', []);

	chatApp.controller('chatCtrl', function($scope, $timeout) {
		$scope.messages = [];
		
		$scope.chat = function(txt) {
			$scope.messages.push({
				sender : 'testguy',
				msg : txt
			});
			
			$scope.msg = '';
		};
	});
}); 