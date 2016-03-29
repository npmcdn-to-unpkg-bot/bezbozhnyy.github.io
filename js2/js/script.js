var arr = [];
for (var i = 0; i < 5; i++){
    arr.push(prompt('Привет! Введите имена:',''));
};

var flag;
var userName = prompt('Введите свое имя (Enter your User Name)','');
for (i = 0; i < arr.length; i++){
    if (arr[i] === userName){
        flag = true;
    }
};
if (flag == true && userName != null) {
    alert(userName + ', добро пожаловать!!!' );
} else
    {
        alert('Sorry, but username' + userName + ' not found :(((')
    };