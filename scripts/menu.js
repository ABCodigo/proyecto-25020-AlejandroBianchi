
/*const links = document.querySelector("#links");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    links.classList.add("visible");    
})

cerrar.addEventListener("click", () => {
   links.classList.remove("visible");   
})
*/



/*para ocultar los controles al desplegar el menu y que no interfieran/se superpongan a todo */
/*const video = document.querySelector("video");

abrir.addEventListener("click", () => {
    links.classList.add("visible");
    if (video) {
        video.removeAttribute("controls"); //  Oculta los controles
    }
});

cerrar.addEventListener("click", () => {
    links.classList.remove("visible");
    if (video) {
        video.setAttribute("controls", ""); //  Vuelve a mostrar los controles
    }
});
*/


const video = document.querySelector("video");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const links = document.getElementById("links");

abrir.addEventListener("click", () => {
    links.classList.add("visible");

    if (video) {
        video.removeAttribute("controls");     // Oculta los controles del video
       /* video.style.zIndex = "-1"; */            // Envía el video detrás del menú
        video.style.pointerEvents = "none";    // Evita que intercepte clics
    }
});

cerrar.addEventListener("click", () => {
    links.classList.remove("visible");

    if (video) {
        video.setAttribute("controls", "");    // Vuelve a mostrar los controles
        /*video.style.zIndex = "0";    */          // Devuelve el z-index original
        video.style.pointerEvents = "auto";    // Restaura la interactividad
    }
});