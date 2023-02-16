function altera_grid() {
    var elemento_conteine = document.querySelector(".containe")
    elemento_conteine.style.cssText = "display: grid; grid: repeat(4, 150px) / repeat(3, 1fr)"
    elemento_conteine.style.cssText ="background-color: aqua"
}

function mudar_estador(){
    var elemento_display = document.querySelector(".mudar");
    var elemento_display2 = document.querySelector(".altera")
    if (elemento_display.style.display == "block" && elemento_display.style.display == "block"){
        elemento_display.style.display = "none";
        elemento_display2.style.display = "none";
    } else {
        elemento_display.style.display = "block"
        elemento_display2.style.display = "block"
    }
}