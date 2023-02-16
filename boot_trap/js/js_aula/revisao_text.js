function respostacorreta() {
var elementoA = document.getElementById("A");
elementoA.style.backgroundColor = '#7daf63';

}
function respostaErrada(letra){
var elementoc = document.getElementById("C");
var elementob = document.getElementById("B");
if ("B" == letra){
    elementob.style.backgroundColor = 'red';
}
if("C" == letra) {
   elementoc.style.backgroundColor = 'red';
}
}
