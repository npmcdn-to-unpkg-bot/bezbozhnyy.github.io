	var arrNames = [];

	for (var i = 0; i < 5; i++ ){
		arrNames[i] = prompt('Enter any name');
		console.log('arrNames =',arrNames);
	}

	var login = prompt('Enter your username','name');
	var flag = false;
	console.log('login =',login);

	for (var i = 0; i < arrNames.length; i++){
		if (login === arrNames[i]) {
			flag = true;
		}
	}

	if (flag){
		alert(login + ', you have successfully entered!!!')
	} else {
		alert('Unfortunately, you could not enter :-(((');
	}