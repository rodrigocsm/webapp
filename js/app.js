var app = angular.module("mainApp", ["ngRoute","ngResource"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/read.html"
    })
    .when("/new", {
        templateUrl : "views/create.html"
    })
    .when("/edit", {
        templateUrl : "views/edit.html"
    })
    .when("/search", {
        templateUrl : "views/search.html"
    })
    .when("/signup", {
        templateUrl : "views/signup.html"
    })
    .when("/login", {
        templateUrl : "views/login.html"
    });
});
app.factory('dataService', function($resource) {
    return $resource('db/data.json');
});
app.factory('sharedRecord', function() {
  var recRow = {};
  
  return {
    set: set,
    get: get
  };

  function set(row, idx) {
    recRow.record = row;
	recRow.index = idx;
  }

  function get() {
    return recRow;
  }
});
app.controller('readCtrl', function($scope, $http, $location, $resource) {
	$scope.funcList = {};
	$resource('db/data.json/').query().$promise.then(function(res){
		$scope.funcList = res;
		console.log(res);
	},{});
	$scope.SelectRow = function(idx) {
	$resource('db/data.json/:id').get({id: idx}).$promise.then(function(res){		
		console.log(res);
	},{});
	};
});
app.controller('editCtrl', function($scope, $http, $location, sharedRecord) {	
	
});
