const viewDetails = document.querySelectorAll(".view-details");

viewDetails.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.currentTarget.nextElementSibling;

    target.style.top = "0";

    target.addEventListener("click", () => {
      target.style.top = "-100%";
    });
  });
});
