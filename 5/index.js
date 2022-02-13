do{
    
    var divisibleNumber = parseInt(prompt("Primer número"));
    var countOfDivisibleNumbers = parseInt(prompt("Segundo número"));

}while((Number.isInteger(divisibleNumber) == false) || (Number.isInteger(countOfDivisibleNumbers) == false));

for(let i = divisibleNumber; i <= countOfDivisibleNumbers; i++){
    if(i % 2 != 0){
        document.write(i);
        document.write("<br>");
    }
}