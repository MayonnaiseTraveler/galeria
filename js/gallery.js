window.addEventListener("DOMContentLoaded", () => {
    fullscreen();
    togglecolumns();

});


function togglecolumns(){
    var opt1= document.querySelector("#opt1");
    var opt2= document.querySelector("#opt2");
    var articles = document.querySelectorAll("#gallery > article");

    opt1.addEventListener("click", () => {
        if (articles.length > 0){
            for (let i of articles){
                i.className = "art-big";
            }
        }
    });
    opt2.addEventListener("click", () =>{
        if (articles.length > 0 ){
            for (let i of articles){
                i.className = "art-small";
            }
        }
    })

}


function fullscreen(){
    var all = document.querySelectorAll("#gallery > article");

    if (all.length > 0) {
        for (let img of all) {
            img.onclick = () => {//se o usuário clicar na imagem
                // (B1) EXIT FULLSCREEN
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