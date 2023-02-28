/*
8.	Realiza dos ejercicios explicando cómo funcionan los métodos push(), pop(), slice() y splice().*/ 

let frutas=new Array('🍓','🍉','🍑','🍌','🍍','🍇');
//push funciona para agrgar elementos al final del array
frutas.push('🥝','🍎');
//pop elimina el ultimo elemto de la tabla 
frutas.pop();
document.write(frutas +"<br>");
//slice devuelve un array con todos los elementos.
let profesiones=new Array('👨‍🍳','👮‍♂️','👩‍🏫','👨‍💻').slice();
//splice Modifica el array añadiendo los elementos
// it1, it2, …, itN, que son insertados en la posición ind (desplazando a los existentes).

profesiones.splice(3,0,'👩‍🔧','👩‍🔬');
document.write(profesiones);