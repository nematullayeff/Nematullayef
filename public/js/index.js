document.querySelector(".menubtn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("translate-x-full");
  });
  document.querySelector(".Xbtn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("translate-x-full");
  });

  // Die //

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });