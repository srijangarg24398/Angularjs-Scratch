var account = function() {
	let balance = 0;
	var deposit = function(amount) {
		balance+=amount;
		console.log("Money deposited. Updated account balance = "+balance);
		sendMsg();
	}
	var withdraw = function(amount) {
		balance-=amount;
		console.log("Money withdrawn. Updated account balance = "+balance);
		sendMsg();
	}
	var sendMsg = function() { 
		console.log('Sending Message...');
	}
	return {
		deposit:deposit,
		withdraw:withdraw
	}
}

var a = account();
a.deposit(1000);
a.withdraw(200);