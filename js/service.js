(function(){
	myApp = angular.module("myApp");
	myApp.service("addSvc",function(){
		this.add=function(firstNum,secondNum){
			console.log('Inside add service')
			return parseInt(firstNum)+parseInt(secondNum);
		}
	})
	myApp.service("subSvc",function(){
		this.sub=function(firstNum,secondNum){
			console.log('Inside sub service')
			return parseInt(firstNum)-parseInt(secondNum);
		}
	})
}());
