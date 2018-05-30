function calculate () {
	var num1=parseInt(document.getElementById('firstInput').value);
	var num2=parseInt(document.getElementById('secondInput').value);
	var result=num1+num2;
	document.getElementById('result').innerHTML=result;
}