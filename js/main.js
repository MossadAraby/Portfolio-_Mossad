// define boxes variables
const Html = document.querySelectorAll(".html");
const Sass = document.querySelectorAll(".sass");
const js = document.querySelectorAll(".js");

// define tabs variables
const tabs = document.querySelectorAll(".animated-list li");
let allTab = document.querySelector(".all-tab");
let HtTab = document.querySelector(".html-tab");
let saTab = document.querySelector(".sass-tab");
let javaTab = document.querySelector(".js-tab");

tabs.forEach(function (ele) {
  ele.style.cssText = "transition: 0.7s";
});
allTab.addEventListener("click", function (e) {
  tabs.forEach(function (ele) {
    ele.classList.remove("active");
    e.currentTarget.classList.add("active");
  });
  Sass.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
  Html.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
  js.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
});

HtTab.addEventListener("click", function (e) {
  tabs.forEach(function (ele) {
    ele.classList.remove("active");
    e.currentTarget.classList.add("active");
  });
  Sass.forEach(function (ele) {
    ele.classList.add("hidden");
    ele.classList.remove("show");
  });
  Html.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
  js.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
});

saTab.addEventListener("click", function (e) {
  tabs.forEach(function (ele) {
    ele.classList.remove("active");
    e.currentTarget.classList.add("active");
  });
  Html.forEach(function (ele) {
    ele.classList.add("hidden");
    ele.classList.remove("show");
  });
  js.forEach(function (ele) {
    ele.classList.add("hidden");
    ele.classList.remove("show");
  });
  Sass.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
});

javaTab.addEventListener("click", function (e) {
  tabs.forEach(function (ele) {
    ele.classList.remove("active");
    e.currentTarget.classList.add("active");
  });
  Html.forEach(function (ele) {
    ele.classList.add("hidden");
    ele.classList.remove("show");
  });
  Sass.forEach(function (ele) {
    ele.classList.add("hidden");
    ele.classList.remove("show");
  });
  js.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
});
