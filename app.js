const carouselinner = document.querySelector(".carousel-inner");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const menulist = document.querySelector(".menu-list");

const t1 = new TimelineMax();

t1.fromTo(carouselinner, 1, {height: "0%"}, {height: "80%", ease: Power2easeInOut})
.fromTo(carouselinner, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(overlay, 1.2, {x: "-100%", {x: "0%", ease: Power2.easeInOut });