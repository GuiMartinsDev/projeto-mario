const btnTrailer = document.querySelector("#btn-trailer");
const modal = document.querySelector(".modal");
const fechaModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function alternarModal() {
  modal.classList.toggle("aberto");
}

btnTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkVideo);
});
fechaModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});
