13.	 /*/Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] 
mostrar en html en cual  posición se encuentran las frutas y en cual posición las verduras.*/

let frutasyverduras = ["tomate","banano","manzana","pera","cebolla","papa","fresas","ajo","sandia"];
let frutas=[];
let con = 0;
for (let i = 0; i < frutasyverduras.length; i++){
    if( frutasyverduras[i]=="banano"||
        frutasyverduras[i]=="manzana"||
        frutasyverduras[i]=="manza"||
        frutasyverduras[i]=="pera"||
        frutasyverduras[i]=="fresas"||
        frutasyverduras[i]=="sandia"){
            frutas[con] = frutasyverduras[i];
            con++;
        }
}
for(let x = 0; x < frutas.length; x++){
    document.write(frutas[x]+"<br>");
}