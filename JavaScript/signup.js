
function setTags(username, email) {
	document.getElementById("lblUsername").innerHTML = username;
	document.getElementById("lblEmail").innerHTML = email;
}

function setLogin(username, password) {
	document.getElementById("lblUsername").innerHTML = username;
	document.getElementById("lblPassword").innerHTML = password;
}

function storeUser(username, password) {
	var un = username;
	var pw = password;
	var formdata = new FormData();
	
	var http = new XMLHttpRequest();
	var url = "";
	var params = "";
	http.open("POST", url, true);
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

}

function testLogin() {
	var inputs = document.getElementById("log-form");
	var params = [];
	var keyValue = {};
	
	for (var i = 0; i < inputs.length; i ++) {
		keyValue[inputs[i].name] = inputs[i].value;
		params.push(keyValue);
	}
	document.getElementById("lblUsername").innerHTML = params[0].un;
	document.getElementById("lblPassword").innerHTML = params[0].pw;
}
