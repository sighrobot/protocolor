var app = angular
	.module('ipv4-directory', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'ip.html',
		controller: 'IPCtrl'
	}).
	when('/:n1', {
		templateUrl: 'ip.html',
		controller: 'IP1Ctrl'
	}).
	when('/:n1/:n2', {
		templateUrl: 'ip.html',
		controller: 'IP2Ctrl'
	}).
	when('/:n1/:n2/:n3', {
		templateUrl: 'ip.html',
		controller: 'IP3Ctrl'
	}).
	otherwise({redirectTo: '/'});

	
}]);

