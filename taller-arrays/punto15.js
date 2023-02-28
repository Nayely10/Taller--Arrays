	/*Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma descendente*/

let numbers = [29,5,40,10,35,42,12,22,25,1,3];
numbers.sort((a, b) => {
    if(a == b) {
      return 0; 
    }
    if(a > b) {
      return -1;
    }
    return 1;
  });
  document.getElementById('descender').innerHTML=(numbers);