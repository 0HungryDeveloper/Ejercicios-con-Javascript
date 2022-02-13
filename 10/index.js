//Pedir 6 números por pantalla y guardar en array
const arrayOfNumbers = []

for(let i = 0; i < 6; i++){
    do{
        var isNumberInArray = parseInt(prompt("Número "+(i+1)))
    }while(Number.isInteger(isNumberInArray) == false)
    arrayOfNumbers[i] = isNumberInArray;
}

//Mostrar elementos en la pagina y en consola usando funciones
function showInPage(arrayOfNumbers){
    document.write(arrayOfNumbers)
    document.write("<br>")
}

showInPage(arrayOfNumbers)

function showInConsole(arrayOfNumbers){
    console.log(arrayOfNumbers)
}

showInConsole(arrayOfNumbers)

//Ordenar el array y mostrarlo
document.write("Array ordenado")
document.write("<br>")
showInPage(arrayOfNumbers.sort())
showInConsole(arrayOfNumbers.sort())

//Invertir orden y mostrarlo
document.write("Array invertido")
document.write("<br>")
showInPage((arrayOfNumbers.sort()).reverse())
showInConsole((arrayOfNumbers.sort()).reverse())

//Mostrar la cantidad de elementos del array
document.write("Cantidad de elementos "+arrayOfNumbers.length)
document.write("<br>")

do{
    
    var isNumberInArray = parseInt(prompt("Digite un número"));

}while(Number.isInteger(isNumberInArray) == false);

var includeTheNumber = arrayOfNumbers.includes(isNumberInArray)

if(includeTheNumber){
    document.write("Si existe " + isNumberInArray + " en la posición: "+arrayOfNumbers.indexOf(isNumberInArray))
}else{
    document.write("No existe el número en el array")
}