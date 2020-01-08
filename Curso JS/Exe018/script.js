var numeros = [];
var resDiv = document.querySelector('div#saida');

function adicionarNumero(){
    let numero = document.querySelector('input#iNum').value;
    let resSel = document.querySelector('select#iRes');

    if(!verificarCaixa(numero)){
        alert('[ERROR] Caixa sem valor ou valor inválido');
    }
    else {
        resDiv.innerHTML = '';
        numero = Number(numero);
        
        if(verificarRepetidos(numero)){
            numeros.push(numero);
            let itemRes = document.createElement('option');
            itemRes.innerText = `Valor ${numero} foi adicionado`;
            itemRes.value = numero;
            resSel.appendChild(itemRes);
        }
    }
}
function verificarRepetidos(numero){
    let verificar = true;
    for(let i in numeros){
        if(numero === numeros[i]){
            return false;
        }
    }
    return verificar;
}
function definirPropriedades(){
    
    resDiv.innerHTML += `<p> Ao todo, temos ${numeros.length} número(s) cadastrados </p>`;
    resDiv.innerHTML += `<p> O maior valor informado foi o ${definirMaiorMenor()[0]} </p>`;
    resDiv.innerHTML += `<p> O menor valor informado foi o ${definirMaiorMenor()[1]} </p>`;
    resDiv.innerHTML += `<p> Somando todos os valores, temos ${somarArray()} </p>`;
    resDiv.innerHTML += `<p> A média dos valores digitados é ${(somarArray()/numeros.length).toFixed(3)} </p>`;
}
function definirMaiorMenor(){
    let maior = 0;
    let menor = 101;
    let resultado = []
    
    for(let i in numeros){
        if(numeros[i] > maior){
            maior = numeros[i];
        }
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }
    resultado[0] = maior;
    resultado[1] = menor;
    return resultado;
}
function somarArray(){
    let sum = 0;
    for(let i in numeros){
        sum += numeros[i];
    }
    return sum;
}


function verificarCaixa(n){
    if(n.length == 0 || Number(n) < 1 || Number(n) > 100){
        return false;
    }
    else{
        return true;
    }
}