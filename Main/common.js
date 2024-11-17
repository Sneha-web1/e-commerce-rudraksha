// header fixed in top
document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".headerfixed");
    const threshold = 68;
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > threshold) {
        navBar.classList.add("fixed");
      } else {
        navBar.classList.remove("fixed");
      }
    });
  });
  // header fixed in top end;