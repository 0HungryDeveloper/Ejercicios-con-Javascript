do{
    
    var getFirstNumber = parseInt(prompt("Primer número"));
    var getSecondNumber = parseInt(prompt("Segundo número"));

}while((Number.isInteger(getFirstNumber) == false) || (Number.isInteger(getSecondNumber) == false));

for(let i = getFirstNumber; i <= getSecondNumber; i++){
    document.write(i);
    document.write("<br>");
}