/// <reference path="angular.js" />
var problemSetApp = angular.module("problemSetModule", []);

var problemSetController = function($scope) {
	$scope.title = "Numerical Methods - Problem Set # 1";
};

problemSetApp.controller("problemSetController", problemSetController);