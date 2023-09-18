let isogram = "angels";
let isogram2 = "avenged sevenfold"; //es un temon, no me pude resistir en no ponerlo jeje
function IsIsogram(cadena) {
    if (cadena.length <= 1) {
        return true;
    }
    if (cadena.slice(1).includes(cadena[0])) {
        return false;
    } else {
        return IsIsogram(cadena.slice(1));
    }
}


console.log(IsIsogram(isogram));
console.log(IsIsogram(isogram2));