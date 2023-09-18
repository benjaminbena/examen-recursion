function isPrime(numero, divisor = 2) {
    if (numero === 2) {
        return true;
    }
    if (numero <= 1) {
        return false;
    }
    if (divisor === numero) {
        return true;
    }
    if (numero % divisor === 0) {
        return false;
    }
    return isPrime(numero, divisor + 1);
}

console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(15));
console.log(isPrime(2)); 
console.log(isPrime(0));