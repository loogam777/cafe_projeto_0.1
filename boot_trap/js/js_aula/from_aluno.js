var urlparamentos = new URLSearchParams(window.location.search);
var nome_recebido = urlparamentos.get('nome')
var faltas_recebidas = urlparamentos.get("faltas")
var nota01_recebida = urlparamentos.get("nota01")
var nota02_recebida = urlparamentos.get("nota02")
// document.write(nome_recebido);
// document.write(faltas_recebidas);
// document.write(nota01_recebida);
// document.write(nota02_recebida);

var inputnome = document.getElementById('nome');
inputnome.value = nome_recebido;

var inputfalta = document.getElementById("faltas");
inputfalta.value = faltas_recebidas;

var inputnota01 = document.getElementById("nota01");
inputnota01.value = nota01_recebida;

var inputnota02 = document.getElementById("nota02");
inputnota02.value = nota02_recebida;