//Pedir 2 números
var firstNumber = prompt("Primer número");
var secondNumber = prompt("Segundo número:");

//Elementos del documento
var first;
var second;

if(firstNumber > secondNumber){
    //Si el primero número es mayor al segundo    
    first = document.getElementById("biggerNumber").innerHTML = "El número mayor es: "+firstNumber;
    second = document.getElementById("minorNumber").innerHTML = "El número menor es: "+secondNumber;
    
}else{    
    //Si el segundo número es mayor al primero
    first = document.getElementById("biggerNumber").innerHTML = "El número mayor es: "+secondNumber;
    second = document.getElementById("minorNumber").innerHTML = "El número menor es: "+firstNumber;

}

//Saber si son los mismos números
var areTheSameNumbers;
if(firstNumber == secondNumber){
    areTheSameNumbers = document.getElementById("sameNumbers").innerHTML = "Son iguales";
}else{
    areTheSameNumbers = document.getElementById("sameNumbers").innerHTML = "No son iguales";
}