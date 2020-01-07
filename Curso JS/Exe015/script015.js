function definirIdade(){

    let resultado = document.querySelector('div#resultado');
    let anoNasc = Number(document.querySelector('input#iIdade').value);
    let anoAtual  = new Date().getFullYear();

    if(anoNasc == 0 || anoNasc > anoAtual){
        alert('[ERROR] Por favor confira os dados digitados e tente novamente');
    }
    else {
        let sexo = document.getElementsByName('nSex');
        let idadeAtual = anoAtual - anoNasc;
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');

        if(sexo[0].checked){
            if(idadeAtual < 10){
                imagem.setAttribute('src', '_images/crianca-menino.png');
            }
            else if(idadeAtual < 21){
                imagem.setAttribute('src', '_images/jovem-homem.png'); 
            }
            else if(idadeAtual < 60){
                imagem.setAttribute('src', '_images/adulto-homem.png');
            }
            else{
                imagem.setAttribute('src', '_images/idoso.png');
            }
        }
        else {
            if(idadeAtual < 10){
                imagem.setAttribute('src', '_images/crianca-menina.png');
            }
            else if(idadeAtual < 21){
                imagem.setAttribute('src', '_images/jovem-mulher.png'); 
            }
            else if(idadeAtual < 60){
                imagem.setAttribute('src', '_images/adulto-mulher.png');
            }
            else{
                imagem.setAttribute('src', '_images/idosa.png');
            }
        }
        

        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos a idade atual de: ${idadeAtual} ano(s)`;
        resultado.appendChild(imagem);
    }
}
