11.	/*Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cual es el primer número, el último, el del centro.*/

//punto 11
var numeros = [3,5,9,10,35,12,22,25];
//mostrar primer dato
document.write("primer dato:" + numeros.shift()+"<br>");
//mostrar de la mita
document.write("dato del medio"+numeros[numeros.length/2]+"<br>");
//mostrar ultimo dato 
document.write("dato ultimo:"+ numeros[-1]+"<br>");
document.write("dato ultimo:"+ numeros.unshift()+"<br>");
document.write("dato ultimo:"+ numeros.pop() +"<br>");