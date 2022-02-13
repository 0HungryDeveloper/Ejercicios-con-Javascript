do{
    
    var getNumber = parseInt(prompt("Digite un número"));

}while(Number.isInteger(getNumber) == false);

if(getNumber % 2 == 0){
    document.write(getNumber+" es número par")
}else{
    document.write(getNumber+" es número impar")
}
