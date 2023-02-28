/*14.	Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma ascendente.*/

let numbers = [29,5,40,10,35,42,12,22,25,1,3];
numbers.sort((a, b) => {
  if(a == b) {
    return 0; 
  }
  if(a < b) {
    return -1;
  }
  return 1;
});


var numeroas=numbers.sort(function(a,b){return a-b});
document.write("los numeros ascendentes son "+numeroas+"<br>");