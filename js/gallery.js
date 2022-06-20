/**
 * essa função só serve pra trocar o texto dos botões caso o site esteja no modo mobile, o css n consegue mudar o content de <button> aparentemente
 */
function mediaQuery() {
    var btn1 = document.querySelectorAll(".buttons > button:nth-child(1)");//aqui eu pego o primeiro botão
    var btn2 = document.querySelectorAll(".buttons > button:nth-child(2)");//aqui o segundo
    if (window.innerWidth <= 1100) {
        //se a tela tem menos que 1100 pixels de width
        for (let i of btn1) {
            //para todos os botões de arte
            i.innerHTML = "";
        }
        for (let i of btn2) {
            //para todos os botões de autor/artista
            i.innerHTML="";
        }
    }
}

/**
 * Essa função faz o menu dropdown da galeria funcionar, e alterna a classe dos artigos de acordo com a opção selecionada
 */
function togglecolumns() {

    //pegar objetos do menu e da galeria
    var btn = document.querySelector("#dropdown"); 
    var dropdown = document.querySelector("#btn-gallery-dropdown"); 
    var opt1 = document.querySelector("#opt1"); 
    var opt2 = document.querySelector("#opt2"); 
    var articles = document.querySelectorAll("#gallery > article");

    //alternar visibilidade do dropdown ao clicar no botão do menu
    btn.addEventListener("click", () => {
        if (dropdown.style["display"] != "block") {

            dropdown.style["display"] = "block";
        }
        else {

            dropdown.style["display"] = "none";
        }
    })
    
    //para cada opção do menu adicionar um event listener, ao ser clicado o código itera por todos os artigos da galeria e troca a classe deles.
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
    //nota: art-small faz ter 2 imagens por linha, art-big eh 1 imagem só.

}
/**
 * Essa função alterna faz os botões alternarem a visibilidade entre os detalhes do artista e da obra.
 */
function toggleArticleDetails() {
    var articles = document.querySelectorAll("#gallery > article"); //pega uma lista com todos os artigos da galeria
    if (articles.length > 0) {
        for (let i of articles) { 
            //pra cada artico ele bota um event listener pra alternar entre o texto exibido com os botões

            var children = i.children;          //aqui são só todos os filhos do artigo msm
            var btns = children[2].children;    //pega os botões que estão dentro de uma section do artigo
            
            let btn1 = btns[0];                 //botão sobre a obra
            let btn2 = btns[1];                 //botão sobre o artista
            
            let textart = children[3];          //pega o texto com dados da obra
            let textartist = children[4];       //pega otexto com dados do artista

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
/**
 * Essa função adiciona um event listener em todas as imagens da galeria, e deixa a imagem em fullscreen ao clicar nela.
 */
function fullscreen() {
    var all = document.querySelectorAll("#gallery > article > img"); //pegar imagens da galeria.
    if (all.length > 0) {

        for (let img of all) { // para cada imagem
            
            img.onclick = () => {
                //se o usuário clicar na imagem
                if (document.webkitFullscreenElement || document.fullscreenElement) { 
                    //se ja está em fullscreen
                    if (document.exitFullscreen) { //se ter um evento de sair do fullscreen
                        document.exitFullscreen(); //sai do fullsecreen
                    
                    } else if (document.webkitExitFullscreen) {//mesma coisa pro webkit (outa engine de navegadores)
                        document.webkitExitFullscreen();
                    }
                }
                else { 
                    //se não está fullsecreen
                    if (img.requestFullscreen) { //entra fullscreen
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

