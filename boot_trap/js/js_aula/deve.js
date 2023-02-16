function acesso() {
    var nome=document.querySelector(".nome").value.toUpperCase();
    if (nome == "LOOGAM") {
       let elemento_do_texto = document.querySelector(".altera__texto");
       elemento_do_texto.innerHTML = "seu acessor esta liberado:" + nome;
    } else {
        let elemento_do_texto = document.querySelector(".altera__texto");
       elemento_do_texto.innerHTML = "seu acessor esta negado:" + nome;
    }
}