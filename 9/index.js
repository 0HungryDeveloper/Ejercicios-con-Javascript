do{
    
    var getFirstNumber = parseInt(prompt("Primer número"));
    var getSecondNumber = parseInt(prompt("Segundo número"));

}while((Number.isInteger(getFirstNumber) == false) || (Number.isInteger(getSecondNumber) == false));

function add(firstNumber,secondNumber){
    document.write("Suma: "+(firstNumber+secondNumber))
    alert("Suma: "+(firstNumber+secondNumber))
    console.log("Suma: "+(firstNumber+secondNumber))
}

function subtract(firstNumber, secondNumber){
    document.write("Resta: "+(firstNumber-secondNumber))
    alert("Resta: "+(firstNumber-secondNumber))
    console.log("Resta: "+(firstNumber+secondNumber))
}

function multiply(firstNumber, secondNumber){
    document.write("Multiplicación: "+(firstNumber*secondNumber))
    alert("Multiplicación: "+(firstNumber*secondNumber))
    console.log("Multiplicación: "+(firstNumber*secondNumber))
}

function divide(firstNumber, secondNumber){
    document.write("División: "+(firstNumber/secondNumber))
    alert("División: "+(firstNumber/secondNumber))
    console.log("División: "+(firstNumber/secondNumber))
}

add(getFirstNumber,getSecondNumber)
subtract(getFirstNumber,getSecondNumber)
multiply(getFirstNumber,getSecondNumber)
divide(getFirstNumber,getSecondNumber)