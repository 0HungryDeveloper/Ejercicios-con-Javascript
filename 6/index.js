do{
    
    var divisibleNumber = parseInt(prompt("Número divisible"));
    var countOfDivisibleNumbers = parseInt(prompt("Cantidad de números divisibles"));

}while((Number.isInteger(divisibleNumber) == false) || (Number.isInteger(countOfDivisibleNumbers) == false));

for(let i = 1; i<= countOfDivisibleNumbers; i++){
    if(i % divisibleNumber == 0){
        document.write(i);
        document.write("<br>");
    }
}