/*9.	Crea un array con nombres de frutas e imprime los datos en html por medio de un ciclo.
*/
let frutas=new Array();
for(var x=1; x<=5; x++){
    ingreso=prompt("ingrese una fruta");
    frutas.push(ingreso);
}
document.getElementById('ver').innerHTML=("las frutas son :" + frutas);
