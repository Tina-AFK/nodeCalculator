var ipAddress = "127.0.0.1";
var portNumber = "52000";
var httpModule = require("http");

dule.createServer(
	 function serviceRequest (request, response) {

		 var queryString = new String(request.url);
		 action=add&number1=3&number2=6
		 
		 var action = keyValuePairs[0].replace("/","").split("=")[1]; // extracting the action specified in the URL
		 var firstNumber = new String(keyValuePairs[1].split("&")).split("=")[1] || "0"; // extracting the first number
		 var secondNumber = new String(keyValuePairs[2].split("&")).split("=")[1] || "0"; // extracting the second number
		 var result = getResult(action.toLowerCase(), Number(firstNumber) , Number(secondNumber));
		 var htmlContent = "<html><b>" + action + "(" + firstNumber + "," + secondNumber + ") = <b>" + result + "</b></html>";
		 
  var queryString = new String(request.url);
response.send(result);
	 })

