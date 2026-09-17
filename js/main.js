const capturas = document.querySelectorAll(".captura-proyecto");
const lightbox = document.getElementById("lightbox");
const lightboxImagen = document.getElementById("lightbox-imagen");
const lightboxDescripcion = document.getElementById("lightbox-descripcion");
const botonCerrar = document.querySelector(".lightbox-cerrar");

capturas.forEach((captura) => {
    captura.addEventListener("click", () => {
        lightboxImagen.src = captura.src;
        lightboxDescripcion.textContent = captura.alt;

        lightbox.classList.add("activo");
        document.body.classList.add("sin-scroll");
    });
});

function cerrarLightbox() {
    lightbox.classList.remove("activo");
    document.body.classList.remove("sin-scroll");
}

botonCerrar?.addEventListener("click", cerrarLightbox);

lightbox?.addEventListener("click", (evento) => {
    if (evento.target === lightbox) {
        cerrarLightbox();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        cerrarLightbox();
    }
});