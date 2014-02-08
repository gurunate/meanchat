/**
 * @author Nate Johnson
 */
require.config({
	baseUrl : 'js',
	paths : {
		angular : 'libs/angular.min',
		socket : '/socket.io/socket.io',
		domReady : 'libs/require/domReady'
	}
});

require(['modules/chat'], function() {
});
