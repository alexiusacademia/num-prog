/// <reference path="angular.js" />
var problemSetApp = angular.module("problemSetModule", []);

var problemSetController = function($scope) {
	$scope.title = "Numerical Methods";
	
	var result = [];
	// Declare variables
	var increment = 0.05;
	var L= 1;				// (a)
	var t = 0.03;
	var R = 200;
	var C = 0.0001;
	var computed = 0.0;			// Computed q/q0
	var required = 0.1;			// q/q0
	var b_1 = 1/(L * C);
	var c_1 = Math.pow((R/2/L), 2);
	var d_1 = Math.sqrt(b_1-c_1);
	var e_1 = t * d_1;
	var f_1 = Math.cos(e_1 * Math.PI / 180);
	var g_1 = -1 * R * t / (2 * L);
	var h_1 = Math.pow(Math.E, g_1);
	computed = f_1 * h_1;
	
	// Initial value
	result.push(
		{
			'a': L,
			'b': b_1,
			'c': c_1,
			'd': d_1,
			'e': e_1,
			'f': f_1,
			'g': g_1,
			'h': h_1,
			'i': computed,
			'bgcolor': 'white'
		}
		);
	
	while (computed < required) {
		L += increment;
		b_1 = 1/(L * C);
		c_1 = Math.pow((R/2/L), 2);
		d_1 = Math.sqrt(b_1-c_1);
		e_1 = t * d_1;
		f_1 = Math.cos(e_1 * Math.PI / 180);
		g_1 = -1 * R * t / (2 * L);
		h_1 = Math.pow(Math.E, g_1);
		computed = f_1 * h_1;
		
		// Add result to array
		result.push(
			{
				'a': L,
				'b': b_1,
				'c': c_1,
				'd': d_1,
				'e': e_1,
				'f': f_1,
				'g': g_1,
				'h': h_1,
				'i': computed,
				'bgcolor': 'white'
			}
			);
	}
	
	// Interpolate last two results with required value
	var resultLength = result.length;
	
	var y = required;
	var y1 = result[resultLength-2].i;
	var y2 = result[resultLength-1].i;
	var x1 = result[resultLength-2].a;
	var x2 = result[resultLength-1].a;
	var x = (y-y2) * (x1-x2) / (y1-y2) + x2;
	
	b_1 = 1/(x * C);
	c_1 = Math.pow((R/2/x), 2);
	d_1 = Math.sqrt(b_1-c_1);
	e_1 = t * d_1;
	f_1 = Math.cos(e_1 * Math.PI / 180);
	g_1 = -1 * R * t / (2 * x);
	h_1 = Math.pow(Math.E, g_1);
	computed = f_1 * h_1;
	
	// Add final to array
	var final =
		{
			'a': x,
			'b': b_1,
			'c': c_1,
			'd': d_1,
			'e': e_1,
			'f': f_1,
			'g': g_1,
			'h': h_1,
			'i': computed,
			'bgcolor': 'cyan'
		};
	
		result.splice(resultLength-1, 0, final);
	
	$scope.result = result;
	
};

problemSetApp.controller("problemSetController", problemSetController);