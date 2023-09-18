let arreglo = [1, 2, 3, 4, 5];
let numero1 = 4;
let numero2 = 9;

function FindNumber(arr, numero) {
    if (arr.includes(numero)) {
        console.log(`El numero ${numero} si se encuentra en el arreglo.`);
    } else {
        console.log(`El número ${numero} no se encuentra en el arreglo.`);
    }
}
FindNumber(arreglo, numero1);  
FindNumber(arreglo, numero2); 


