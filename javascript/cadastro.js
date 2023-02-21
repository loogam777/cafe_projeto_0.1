
 function meuAcesso() {
     var nome = document.querySelector("#staticEmail2").value;
     var regex = /[^A-Za-zá-ú0-9.@]/gi;
     var valida_nome = nome.match(regex)
     if (valida_nome || !nome){
         alert("Nome possuir caracteres inválido ou esta vazio!");
     } else {
         var senha = document.querySelector("#inputPassword2").value;
         var reget2 = /[^0-9]/gi;
         var valida_senha = senha.match(reget2);
     } if (valida_senha || !senha){
             alert("Senha possuir caracteres inválido ou esta vazio!");
         } else {
             window.location.assign("cafe.html");    
     
    }
}