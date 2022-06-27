const headerNav = document.querySelector(".header__navigation");
const navToggle = document.querySelector(".main-nav__toggle");

headerNav.classList.remove("header__navigation--nojs");

navToggle.addEventListener("click", () => {
  if (headerNav.classList.contains("header__navigation--closed")) {
    headerNav.classList.remove("header__navigation--closed");
    headerNav.classList.add("header__navigation--opened");
  } else {
    headerNav.classList.add("header__navigation--closed");
    headerNav.classList.remove("header__navigation--opened");
  }
});

const swiper = new Swiper(".swiper__wrapper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const map = L.map("map", { scrollWheelZoom: true }).setView(
  [59.968435975884354, 30.317528294049186],
  20
);

const basemaps = {
  StreetView: L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ),
};

L.control.layers(basemaps).addTo(map);

basemaps.StreetView.addTo(map);

const mark = L.icon({ iconUrl: "../img/mappin.svg", iconSize: [38, 50] });

const marker = L.marker([59.968435975884354, 30.317528294049186], {
  icon: mark,
})
  .bindPopup("Drink2Go - Интернет магазин кофейных напитков")
  .addTo(map);
