/**
 * @author Nate Johnson
 */
require.config({
	baseUrl : 'js',
	paths : {
		angular : 'libs/angular.min',
		socket : 'libs/socket.io.min',
		domReady : 'libs/require/domReady'
	},
	shim : {
		'angular' : {
			exports : 'blah'
		}
	}
});

require(['modules/chat'], function() {
});
