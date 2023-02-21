function login() {
    var email = document.querySelector("#inputEmail4").value;
    var senha = document.querySelector("#inputPassword4").value
    if (email == "zidanyteixeira18@gmail.com" && senha == 12) {
        window.location.assign("cafe.html");
    } else {
        alert("Erro");
    }
}