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

  // Wo Wir //

  let btn1 = document.querySelectorAll(".btn-js-down");
let main1 = document.querySelectorAll(".main-js-down");

btn1.forEach((item, index) => {
  item.addEventListener("click", function () {
    main1[index].classList.toggle("hidden");
    item.classList.toggle("rotate-180");
  });
});