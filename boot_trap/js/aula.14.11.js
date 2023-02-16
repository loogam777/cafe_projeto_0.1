//nome =prompt('qual seu nome')//


//alert('seja bem vindo a aula ' + nome);//

// numero =prompt('infome seu primeiro numero')

// numero2 =prompt ('informe seu secundo numero')

// soma =Number(numero) + Number(numero2);

// alert('soma de dois numero '+soma)


//  var nome = prompt("qual seu nome")
//  alert("seja bem vindo " + nome)
//  document .write("<h1>seja bem vindo novamente " +nome+"</h1>")
// document.write("<img src='https://th.bing.com/th/id/R.d15f05f81180029dae0ca62dfe8d0cf4?rik=DOTIF6oxCocABw&pid=ImgRaw&r=0'>");

var area = document.getElementById("area");
function entra(){
    var nome = prompt("qual seu nome");
    area.innerHTML="que bom que vc chegou" + nome;
}


