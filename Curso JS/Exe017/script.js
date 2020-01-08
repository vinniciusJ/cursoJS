function gerarTabuada(){
    let num = document.querySelector('input#iNum');
    let tab = document.querySelector('select#selTab');
    
    if(num.value.length == 0){
        alert('[ERROR] Por favor insira um número');
    }
    else {
        let n = Number(num.value);
        tab.innerHTML = '';
        for(let m = 0; m <= 10; m++){
            let item = document.createElement('option');
            item.text = `${n} x ${m} = ${n * m}`;
            item.value = `tab${m}`;
            tab.appendChild(item);
        }
    }
}