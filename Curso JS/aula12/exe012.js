var hora = new Date().getHours();
//hora = hora.getHours();

console.log(`Agora são exatamente ${hora} horas`);

if(hora < 5){
    console.log('Boa madrugada!');
}
else if(hora < 12){
    console.log('Bom dia!');
}
else if(hora <= 18){
    console.log('Boa Tarde!');
}
else {
    console.log('Boa noite!');
}