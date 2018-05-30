(function(){
	myApp = angular.module("myApp");
	myApp.controller('AppCtrl',function($scope,addSvc,subSvc){
		this.calculate=function(firstNum,secondNum){
			console.log('Calculating ...')
			this.result=parseInt(firstNum)+parseInt(secondNum);
		}
		this.employee={
			firstName:"Srijan",
			lastName:"Garg",
			occupation:"Web Developer"
		}
		$scope.calculate=function(firstNum,secondNum){
			console.log('Calculating via service ...')
			this.result=addSvc.add(firstNum,secondNum);
		}
		$scope.employee=this.employee;
		$scope.taskData={
			task:"Cooking",
			status:true
		}
		$scope.onStatusClick=function(){
			console.log('Status : '+$scope.taskData.status)
		}
		$scope.toUppercase=function(text){
			return text.toUpperCase();
		}
	})
}());
