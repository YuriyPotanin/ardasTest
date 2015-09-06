var app = angular
	.module('tasksModule', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
		 when('/', {
		 templateUrl: './table/table.html',
		 controller: 'taskController'
	 }).
	 when('/task/:taskId', {
		 templateUrl: './task/taskDetail.html',
		 controller: 'taskDetailCtrl'
	 }).
		otherwise({
			redirectTo: '/'
		});
	


});