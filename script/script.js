const backTop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backTop.classList.add("backtop-show");
  } else {
    backTop.classList.remove("backtop-show");
  }
}

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

window.addEventListener("scroll", () => {
  toggleBacktop();
});
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
  var doc = document.documentElement;
  var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  if (top > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
  } else {
    navbar.style.background = "transparent";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");
  const navbar = document.querySelector(".navbar .navbar-nav");
  navbarTogglerIcon.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
  });
});
