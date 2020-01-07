function carregar(){
    let msg = document.querySelector('div#msg');
    let body = document.querySelector('body');
    let img = document.querySelector('img#image');
    let hora = new Date().getHours();

    if(hora < 12 && hora > 5){
        msg.innerHTML = `Bom dia!! <br/><br/> Agora são ${hora} horas.`;
        body.style.background = 'rgba(231, 200, 20, 0.699)';
        img.src = '_images/manha.jpg';
    }
    else if(hora < 18 && hora > 5){
        msg.innerHTML = `Boa Tarde!! <br/><br/> Agora são ${hora} horas.`;
        body.style.background = 'rgba(230, 176, 61, 0.897)';
        img.src = '_images/tarde.jpg';
    }
    else if(hora < 24 || hora < 5){
        msg.innerHTML = `Boa Noite!! <br/><br/> Agora são ${hora} horas.`;
        body.style.background = 'rgba(58, 14, 116, 0.897)';
        img.src = '_images/noite.jpg';
    }

}
