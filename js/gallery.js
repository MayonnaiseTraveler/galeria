function mediaQuery() {
    // essa função só serve pra trocar o texto dos botões caso o site esteja no modo mobile, o css n consegue mudar o content de <button> aparentemente
    var btn1 = document.querySelectorAll(".buttons > button:nth-child(1)");//aqui eu pego o primeiro botão
    var btn2 = document.querySelectorAll(".buttons > button:nth-child(2)");//aqui o segundo
    if (window.innerWidth <= 1100) {//se a tela tem menos que 1100 pixels de width
        for (let i of btn1) {
            i.innerHTML = "";
        }
        for (let i of btn2) {
            i.innerHTML="";
        }
    }
}

function togglecolumns() {
    //essa função serve para mostrar o menu de pop up da galeria e trocar o modo de visualização dos itens dela
    var btn = document.querySelector("#dropdown");
    var dropdown = document.querySelector("#btn-gallery-dropdown");
    var opt1 = document.querySelector("#opt1");
    var opt2 = document.querySelector("#opt2");
    var articles = document.querySelectorAll("#gallery > article");
    btn.addEventListener("click", () => {
        if (dropdown.style["display"] != "block") {

            dropdown.style["display"] = "block";
        }
        else {

            dropdown.style["display"] = "none";
        }
    })
    
    //para cada opção do menu adiciona um event listener, ao ser clicado o código itera por todos os artigos e troca a classe deles.
    opt1.addEventListener("click", () => {
        if (articles.length > 0) {
            for (let i of articles) {
                i.className = "art-big";
            }
        }
    });
    opt2.addEventListener("click", () => {
        if (articles.length > 0) {
            for (let i of articles) {
                i.className = "art-small";
            }
        }
    })

}

function toggleArticleDetails() {
    // essa função faz os botões de cada artigo alterarem entre a descrição da obra e do artista

    var articles = document.querySelectorAll("#gallery > article"); //pega uma lista com todos os artigos da galeria
    if (articles.length > 0) {
        for (let i of articles) { //pra cada artico ele bota um event listener pra alternar entre o texto exibido com os botões
            var btns = i.children[2].children; //pega os filhos do segundo filho do artigo (os filhos da div com os botões, que são os botões no caso)
            var children = i.children; //aqui são só todos os filhos do artigo msm
            //console.log(children)
            let btn1 = btns[0]; //botão sobre a obra
            let btn2 = btns[1]; //botão sobre o artista
            let textart = children[3]; //texto com dados da obra
            let textartist = children[4]; // texto com dados do artista

            //aqui eu boto os event listener nos botões
            btn1.addEventListener("click", () => {
                textart.style["display"] = "block";
                textartist.style["display"] = "none";
            });
            btn2.addEventListener("click", () => {
                textart.style["display"] = "none";
                textartist.style["display"] = "block";
            });
        }
    }
}


function fullscreen() {
    //essa função pega todas as imagens e faz elas ficarem fullscreen se o usuário clicar nelas
    var all = document.querySelectorAll("#gallery > article > img");
    if (all.length > 0) {
        for (let img of all) {
            img.onclick = () => {//se o usuário clicar na imagem
                if (document.webkitFullscreenElement || document.fullscreenElement) { //se está fullscreen
                    if (document.exitFullscreen) { //se ter um evento de sair do fullscreen
                        document.exitFullscreen(); //sai do fullsecreen
                    } else if (document.webkitExitFullscreen) {//mesma coisa pro webkit (outa engine de navegadores)
                        document.webkitExitFullscreen();
                    }
                }

                // (B2) ENGAGE FULLSCREEN
                else { //se não está fullsecreen
                    if (img.requestFullscreen) { //pede fullscreen
                        img.requestFullscreen();
                    } else if (img.webkitRequestFullscreen) {
                        img.webkitRequestFullscreen();
                    }
                }
            };
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    fullscreen(); //função que adiciona event listener nas imagens pra quando o usuario clicar elas ficarem fullscreen
    togglecolumns();//função que adiciona event listener no menu dropdown e deixa alternar entre as opções de ver 1 coluna e 2 colunas no website
    toggleArticleDetails();//função que adiciona event listener nos botões e deixa alternar entre os dados da obra e os dados do artista
    mediaQuery(); //função que altera os icones dos botões de obra e artista pq o content do css n funcionou.

});

