//------------------Escopo---------------------------
 var myVariable = 'global';
myOtherVariable = 'global';

function MyFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

document.write(myVariable)
console.log(myVariable);
console.log(MyFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable); 

//------------------Operadores---------------------------
var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1:' + (num == 1)); //falso
console.log('num === 1:' + (num === 1)); //falso
console.log ('num != 1: ' + (num !=1)); // true

//---operadores bit a bit                                                                               

