var number = prompt ('Привет! Введите число которое хотите возвести в степень:', '');
var degrees = prompt ('Введите желаемую степень', '');

result = Math.pow(number, degrees);
console.log('Yor degree number is '+ result);
alert (number +' возведенное в степень ' +degrees +' = ' + result);