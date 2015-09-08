app.controller('userCtrl',  function($scope, $filter,userService) {
 
 
var orderBy = $filter('orderBy');
$scope.employees = userService.list();
 // console.log($scope.users );
 $scope.currentPage = 0;
 $scope.pageSize = 4;
 $scope.numberOfPages=function(){
        return Math.ceil($scope.employees.length/$scope.pageSize);                
  }
 
 
 $scope.order = function(predicate, reverse) {
    $scope.users = orderBy($scope.users	, predicate, reverse);
 };
 
  // $scope.removeRow = function (id) {
	     // userService.delete(id);
  // }
  
	
  


});

app.controller('newUser', function($scope,$routeParams,userService) {
	 
	var id = $routeParams.id;
	
	$scope.reporter = userService.findReporterById(id);
	console.log($scope.reporter);

});

 
	
app.controller('changeUser', function($scope, $routeParams,userService) {

    
	var id = $routeParams.id;
	console.log(id);
    $scope.employee = userService.getUser(id);
    // $scope.fName = $scope.user.fName;
    // $scope.lName = $scope.user.lName;
    // $scope.sex = $scope.user.sex;
    // $scope.age = $scope.user.age;
	
	// $scope.saveChanges = function (){
		// /*	
 	 // $scope.users[id-1].fName = $scope.fName;
	 // $scope.users[id-1].lName = $scope.lName;
	 // $scope.users[id-1].sex = $scope.sex;
	 // $scope.users[id-1].age = $scope.age;
		// */
	// var changedUser = {id: id, 
	// fName: $scope.fName, 
	// lName: $scope.lName, 
	// sex: $scope.sex, 
	// age: $scope.age};
		
	// userService.save(changedUser);
	
	// $scope.edit = false;
	// $scope.delete = false;
	// $scope.incomplete = true;
	// $scope.fName = '';
	// $scope.lName = '';
	// $scope.sex = '';
	// $scope.age = '';
	// $scope.passw1 = '';
	// $scope.passw2 = '';
	// alert("changed!");
	// }
	
	// $scope.$watch('passw1',function() {$scope.test();});
    // $scope.$watch('passw2',function() {$scope.test();});
    // $scope.$watch('fName', function() {$scope.test();});
    // $scope.$watch('lName', function() {$scope.test();});
    // $scope.$watch('gender', function() {$scope.test();});
    // $scope.$watch('age', function() {$scope.test();});

    // $scope.incomplete = true;
    // $scope.test = function() {
        // if ($scope.passw1 !== $scope.passw2) {
            // $scope.error = true;
        // } else {
            // $scope.error = false;
        // }
        // $scope.incomplete = false;
        // if ( (!$scope.fName.length ||
            // !$scope.lName.length ||
            // !$scope.passw1.length || !$scope.passw2.length)) {
            // $scope.incomplete = true;
        // }
    // };
	

 
 });

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});


 
