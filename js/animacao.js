var botaoSort
var botaoVoltar
var botaoAvancar
var moldura
var fotos
var indice
var temporizador


botaoVoltar = document.getElementById("btnVoltar")
botaoAvancar = document.getElementById("btnAvancar")
moldura = document.getElementById("imagem")



fotos = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"] // ----- array de imagens ------

indice = 0 // ----- contador paras imagens -----

window.onload = inicio //----- comando para testar função -----

// -----function serve para criar funções-----
function inicio() {

    botaoAvancar.onclick = avancarImagem
    botaoVoltar.onclick = voltarImagem

    autoImagem()
    mostrarImagem() // inicializa a imagem

}

function avancarImagem() {

    if (indice < fotos.length - 1) {
        indice++
    } else {
        indice = 0
    }
    mostrarImagem()
    clearInterval(temporizador)
    autoImagem()
}

function voltarImagem() {

    if (indice > 0) {
        indice--
    } else {
        indice = fotos.length - 1
    }

    mostrarImagem()
    clearInterval(temporizador)
    autoImagem()

}

function autoImagem() {

    temporizador = setInterval(avancarImagem, 10500)



}
//src="img/teste1.jpg"
function mostrarImagem() {

    moldura.src = "img/" + fotos[indice]




}