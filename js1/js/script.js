var x = prompt("Enter the number:","Number");
var n = prompt("Enter the degree of:","Degree of");

if (x % 1 !== 0) {
alert('The number of '+x+' is not supported, enter the integer');
} else if (n % 1 !== 0){
alert ('The degree of '+n+' is not supported, enter the integer');
} else if (n < 0) {
alert (negativeInvolution (x,n));
} else {
alert (positiveInvolution (x,n));
}
function positiveInvolution (x,n){
var result = 1;
for(i = 0; i < n; i++ ){
	result *= x;
}
console.log ('Result = ', result);
return result;
}
function negativeInvolution (x,n){
var result = 1;
for(i = 0; i < n; i++ ){
	result *= x;
}
var fraction = (1 / result);
console.log ('Result = ', fraction);
return fraction;
}
