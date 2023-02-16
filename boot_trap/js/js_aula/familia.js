function alerta() {
    alert("seja bem vindo")
}
document.getElementById('nome').value = ("loogam");
var nome;
function acesso() {
    nome = prompt('informe seu nome')
    var idade = prompt('informe seu idade')
    var nivel_de_acesso = 12;


    // if (idade < 12){
    //     acesso negado

    // } if ( idade > 12){
    //      acessor permitido
    // }

    if (idade >= 12) {
       let elemento_do_texto = document.querySelector(".altera__texto");
       elemento_do_texto.innerHTML = "seu acessor esta liberado:" + nome.toUpperCase();
    } else {
        let elemento_do_texto = document.querySelector(".altera__texto");
       elemento_do_texto.innerHTML = "seu acessor esta negado:" + nome.toUpperCase();
    }
}

function area_restrita() {
    if (nome.toUpperCase() == "LOOGAM") {
        let elemento_do_texto = document.querySelector(".altera__texto");
       elemento_do_texto.innerHTML = "acessor permitido" + nome.toUpperCase();
    } else {
        alert("volta");
    }
}