import "normalize.css";
import "./common.blocks/page/page.js";

import header from "./common.blocks/header/header.js";
import footer from "./common.blocks/footer/footer.js";
import "./library.blocks/label/label.js";
import filterDateDropdown from "./library.blocks/filter-date-dropdown/filter-date-dropdown.js";
import dropdown from "./library.blocks/dropdown/dropdown.js";
import rangeSlider from "./library.blocks/range-slider/range-slider.js";
import "./library.blocks/checkbox-button/checkbox-button.js";
import checkboxList from "./library.blocks/expandable-checkbox-list/expandable-checkbox-list.js";
import roomCard from "./common.blocks/room-card/room-card.js";
import pagination from "./library.blocks/pagination/pagination.js";

import "./templates/search-room/search-room.scss";

$(window).on("load", () => {
  const pageData = [
    {
      number: 888,
      category: "ЛЮКС",
      cost: "9 990",
      rating: 5,
      reviewCount: 145,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg"],
    },
    {
      number: 840,
      category: "",
      cost: "9 990",
      rating: 4,
      reviewCount: 65,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 980,
      category: "ЛЮКС",
      cost: "8 500",
      rating: 3,
      reviewCount: 35,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 856,
      category: "",
      cost: "7 300",
      rating: 5,
      reviewCount: 19,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 740,
      category: "",
      cost: "6 000",
      rating: 4,
      reviewCount: 11,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 982,
      category: "",
      cost: "5 800",
      rating: 3,
      reviewCount: 56,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 678,
      category: "",
      cost: "5 500",
      rating: 5,
      reviewCount: 45,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 450,
      category: "",
      cost: "5 300",
      rating: 4,
      reviewCount: 39,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 350,
      category: "",
      cost: "5 000",
      rating: 3,
      reviewCount: 77,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 666,
      category: "",
      cost: "5 000",
      rating: 5,
      reviewCount: 25,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 444,
      category: "",
      cost: "5 000",
      rating: 3,
      reviewCount: 15,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 352,
      category: "",
      cost: "5 000",
      rating: 3,
      reviewCount: 55,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    },
    {
      number: 200,
      category: "ЛЮКС",
      cost: "9 990",
      rating: 5,
      reviewCount: 124,
      images: ["image-1.min.jpg", "image-2.min.jpg", "image-3.min.jpg", "image-4.min.jpg"]
    }
  ];

  function paginateTemplate(data) {
    const template = document.querySelector("#template");
    const html = document.createElement("div");
    data.forEach(item => {
      const card = template.content.cloneNode(true);
      card.querySelector(".room-card__room-number").textContent = item.number;
      card.querySelector(".room-card__room-category").textContent = item.category;
      card.querySelector(".room-card__cost").firstChild.textContent = `${item.cost}₽`;
      card.querySelector(".room-card__rating").setAttribute("name", `room-rating-${item.number}`);
      card.querySelector(`.rate-button__value[value='${item.rating}']`).setAttribute("selected", "selected");
      card.querySelector(".gl-star-rating--stars").childNodes.forEach((node, idx) => {
        if (idx !== item.rating) {
          node.classList.add("gl-active");
        }
      });
      card.querySelector(".room-card__reviews").textContent = item.reviewCount;
      item.images.forEach((img, idx) => {
        const slide = document.createElement("li");
        slide.classList.add("glide__slide");
        const link = document.createElement("a");
        link.classList.add("glide__link");
        link.setAttribute("href", `/booking-room/${item.number}`);
        const image = new Image();
        image.src = require(`/src/images/rooms/${item.number}/${img}`);
        image.classList.add("glide__img");
        link.appendChild(image);
        slide.appendChild(link);
        card.querySelector(".glide__slides").appendChild(slide);

        const bullet = document.createElement("div");
        bullet.classList.add("glide__bullet");
        bullet.setAttribute("data-glide-dir", `=${idx}`);
        card.querySelector(".glide__bullets").appendChild(bullet);
      });
      html.appendChild(card);
    });
    return html.innerHTML;
  }
  pagination(
    ".search-room__room-paginate",
    ".search-room__room-cards",
    pageData,
    paginateTemplate,
    roomCard
  );

  header(".header");
  footer();
  filterDateDropdown(".search-room__filter-date-dropdown", [
    "2022-01-25",
    "2022-01-30",
  ]);
  dropdown(".search-room__dropdown--guests", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);
  rangeSlider(".search-room__range-slider");
  dropdown(".search-room__dropdown--room", [
    { one: "спальня", twoToFour: "спальни", moreThanFive: "спален" },
    { one: "кровать", twoToFour: "кровати", moreThanFive: "кроватей" },
    {
      one: "ванная комната",
      twoToFour: "ванные комнаты",
      moreThanFive: "ванных комнат",
    },
  ]);
  checkboxList();
  // roomCard();
});
