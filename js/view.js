const viewContent = document.querySelector(".view-content");
const viewCover = document.querySelector(".view-cover");
const viewImages = document.querySelectorAll(".view-image");
const mainHeader = document.getElementById("header");
const imageViewer = document.querySelector(".image-viewer");
const imageViewerSRC = document.querySelector(".image-viewer > img");
const closeImageViewer = document.querySelector(".close-image-viewer");

viewContent.addEventListener("click", (e) => {
  e.preventDefault();

  mainHeader.style.top = "-100%";
  document.body.style.overflow = "auto";
});

viewCover.addEventListener("click", (e) => {
  e.preventDefault();

  mainHeader.style.top = "0";
  document.body.style.overflow = "hidden";
});

viewImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    const src = e.currentTarget.getAttribute("src");

    imageViewerSRC.src = src;
    imageViewer.style.display = "flex";
    setTimeout(() => {
      imageViewerSRC.style.transform = "scale(1)";
    }, 300);
  });
});

closeImageViewer.addEventListener("click", (e) => {
  e.preventDefault();
  imageViewerSRC.style.transform = "scale(0)";

  setTimeout(() => {
    imageViewerSRC.src = "";
    imageViewer.style.display = "none";
  }, 300);
});
