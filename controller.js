angular.module("rose", [])
	.controller("roseController", Rosefunction)

	function Rosefunction()	{
		var rCtl= this;

		rCtl.greeting = "this is working"

		rCtl.showmap = false;

		rCtl.map= function()	{
			rCtl.showmap= !rCtl.showmap
		}

		

	};























