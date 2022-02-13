do{
    
    var getNumber = parseInt(prompt("Digite un número"));

}while(Number.isInteger(getNumber) == false);

for(let i = 0; i <= 10; i++){
    document.write(i + " x " + getNumber + " = "+i*getNumber)
    document.write("<br>")
}