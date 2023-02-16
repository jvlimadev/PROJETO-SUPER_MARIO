const video = document.getElementById("video");
const linkDoVideo = video.src;
const modal = document.querySelector(".modal");


function alternarModal() {
    modal.classList.toggle("aberto");
}

const botaoTrailer = document.querySelector(".botao-trailer");

botaoTrailer.addEventListener('click', () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src","");
});
