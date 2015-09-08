var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'view/EmployeeList.html',
				controller:'userCtrl'
			}).
			when('/edituser/:id/dir', {
				templateUrl: 'view/DirectReports.html',
				controller: 'newUser'
			}).
			when('/edituser/:id', {
				templateUrl: 'view/EmployeeDetails.html',
				controller: 'changeUser'
			}).
			otherwise({
				redirectTo: '/'

			});
	}
]);