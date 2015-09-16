(function AngularJStatClosure (undefined) {

	var global = this;

	angular.module('JStatModule', [])
	.factory('JStat', [
		function JStatFactoryFunction () {
			return global.jStat;
		}
	]);

