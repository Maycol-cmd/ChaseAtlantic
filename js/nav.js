const header = document.querySelector(".sub-header");
const navBarButton = document.querySelector(".nav-bar-button");
const navigation = document.querySelector(".navigation");
const navHeight = document.querySelector(".navigation > ul");

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    navigation.style.height = navHeight.offsetHeight + "px  ";
  } else {
    navigation.style.height = 0;
    navBarButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("stick");
  } else {
    header.classList.remove("stick");
  }
});

navBarButton.addEventListener("click", (e) => {
  e.preventDefault();
  const height = navHeight.offsetHeight;

  if (navigation.offsetHeight > 0) {
    navigation.style.height = 0;
    navBarButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    navigation.style.height = height + "px";
    navBarButton.innerHTML = '<i class="fa-solid fa-close"></i>';
  }
});
