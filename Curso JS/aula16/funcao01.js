function definirNumero(n){
    if(n % 2 == 0){
        return 'par';
    }
    else {
        return 'impar';
    }
}
let res = definirNumero(4);
console.log(`O número é ${res}`);