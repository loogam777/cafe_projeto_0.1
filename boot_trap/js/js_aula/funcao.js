function messagem(){
console.log("apredendo sobre funcao")
}

function soma(varlo1, valor2){
    return varlo1 + valor2;
}
messagem()
console.log(soma(230, 345))

function media(nota1, nota2, nota3, nota4){
return (nota1 + nota2 + nota3 + nota4)/4
}

console.log (media(5,6,8,9));

function valida_sexo(sexo){
    if (sexo == "f") {
    console.log("vc e mulher")
}   else if (sexo == "m"){
    console.log("voce home")
}   else{
    console.log("vc e um robo")
}
}
valida_sexo("m")
