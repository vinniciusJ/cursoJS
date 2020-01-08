function contarSequencia(){
    let resultado = document.querySelector('div#saida');
    let inicio = document.querySelector('input#caxInicio').value;
    let fim = document.querySelector('input#caxFim').value;
    let passo = document.querySelector('input#caxPasso').value;
    
    if(verificarEntradas(inicio, fim, passo)){
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);

        if(inicio < fim){
            resultado.innerHTML += `\u{1F3C1} `;
            for(let i = inicio; i <= fim; i+=passo){
                if(i == fim){
                    resultado.innerHTML += `${i} `;
                }
                else {
                    resultado.innerHTML += `${i} \u{1F449} `;
                }
            }
            resultado.innerHTML += `\u{1F3C1}`;
        }
        else {
            resultado.innerHTML += `\u{1F3C1} `;
            for(let i = inicio; i >= fim; i-=passo){
                if(i == fim){
                    resultado.innerHTML += `${i} `;
                }
                else {
                    resultado.innerHTML += `${i} \u{1F449} `;
                }
            }
            resultado.innerHTML += `\u{1F3C1}`;
        }
    }
    else {
        alert('Preencha todos os campos solicitados');
    }
    
    
}
function verificarEntradas(inicioParam, fimParam, passoParam){
    if(inicioParam == '' || fimParam == '' || passoParam == ''){
        return false;
    }
    else {
        return true;
    }
}