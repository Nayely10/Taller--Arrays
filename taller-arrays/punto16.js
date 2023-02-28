/*Del siguiente arreglo [2,4,6,8,10,12,14,16,18,20,22] mostrar en html los elementos ordenados aleatoriamente*/

let numero =[3,5,9,10,35,42,12,22,25];
var numerosaleatorio=numero.sort(function(){return Math.random()-0.5});
document.write("Numeros aleatorios:"+numerosaleatorio+"<br>");