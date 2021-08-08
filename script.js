let inputadultos = document.getElementById("adultos")
let inputCriança = document.getElementById("criancas")
let inputDuração = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calcular(){
    let adulto = inputadultos.value
    let criança = inputCriança.value
    let duração = inputDuração.value

    let qdcarne = carnepp(duração) * adulto + (carnepp(duração)/2 * criança)
    let qdcerveja = cervejapp(duração) * adulto 
    let qdBebidas = bebidaspp(duração) * adulto + (bebidaspp(duração)/2 * criança)

    resultado.innerHTML = `<p>${qdcarne}gr de Carne  </p>`
    resultado.innerHTML += `<p>${qdcerveja}ml de Cerveja </p>`
    resultado.innerHTML += `<p>${qdBebidas}ml de Bebida  </p>`
    


    
}

function carnepp(duração){
    if( duração >= 6)
    return 400;
    else
    return 650;
}
function cervejapp(duração){
    if( duração >= 6)
    return 1200;
    else
    return 2000;
}
function bebidaspp(duração){
    if( duração >= 6)
    return 1000;
    else
    return 1500;
}