do{
    
    var getFirstNumber = parseInt(prompt("Primer número"));
    var getSecondNumber = parseInt(prompt("Segundo número"));

    //Verifico que sean números
    console.log(Number.isInteger(getFirstNumber));
    console.log(Number.isInteger(getSecondNumber));

}while(((Number.isInteger(getFirstNumber) == false) || (Number.isInteger(getSecondNumber) == false)) 
        || getFirstNumber <= 0 
        || getSecondNumber <=0);

var biggerNumber;
var minorNumber;

if(getFirstNumber > getSecondNumber){
    //Si el primero número es mayor al segundo    
    biggerNumber = document.getElementById("biggerNumber").innerHTML = "El número mayor es: "+getFirstNumber;
    minorNumber = document.getElementById("minorNumber").innerHTML = "El número menor es: "+getSecondNumber;
    
}else{    
    //Si el segundo número es mayor al primero
    biggerNumber = document.getElementById("biggerNumber").innerHTML = "El número mayor es: "+getSecondNumber;
    minorNumber = document.getElementById("minorNumber").innerHTML = "El número menor es: "+getFirstNumber;

}

var areTheSameNumbers;

if(getFirstNumber == getSecondNumber){
    areTheSameNumbers = document.getElementById("sameNumbers").innerHTML = "Son iguales";
}else{
    areTheSameNumbers = document.getElementById("sameNumbers").innerHTML = "No son iguales";
}