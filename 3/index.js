const arrayOfNumbers = [];

var counter = 0;

do{
    var getNumber = parseInt(prompt("Dame un número: "));
    arrayOfNumbers[counter] = getNumber;
    counter++;
}while(getNumber>=0);

//Elimino el último elemento que es un número negativo
arrayOfNumbers.pop();
var showArrayOfNumbers = document.getElementById("arrayNumbers").innerHTML = arrayOfNumbers;

var sumOfNumbers = 0;
arrayOfNumbers.forEach(function(number){
    sumOfNumbers += number;
});

var showResultOfSumOfNumbers = document.getElementById("sumOfNumbers").innerHTML = sumOfNumbers;

var getMedium = document.getElementById("medium").innerHTML = sumOfNumbers/arrayOfNumbers.length;