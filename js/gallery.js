window.addEventListener("DOMContentLoaded", () => {
  // (A) GET ALL IMAGES
  var all = document.querySelectorAll("#gallery > article");

  // (B) CLICK ON IMAGE TO TOGGLE FULLSCREEN
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
});