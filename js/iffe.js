// IFFE - Immediately Invoked Function Expression

(function(){
	var com={}
	com.users={}
	com.users.A={}
	com.users.A.utility=function(){
		console.log("A's utility function")
	}
	com.users.A.utility();
	com.users.B={}
	com.users.B.utility=function(){
		console.log("B's utility function")
	}
	com.users.B.utility();

	function utility(){
		console.log("Global utility function");
	}
	utility();
}());