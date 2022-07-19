// define boxes variables
const Html = document.querySelectorAll(".html");
const photoshop = document.querySelectorAll(".photoshop");
const js = document.querySelectorAll(".js");

// define tabs variables
const tabs = document.querySelectorAll(".animated-list li");
let allTab = document.querySelector(".all-tab");
let HtTab = document.querySelector(".html-tab");
let phTab = document.querySelector(".photoshop-tab");
let javaTab = document.querySelector(".js-tab");

tabs.forEach(function (ele) {
  ele.style.cssText = "transition: 0.6s";
});
allTab.addEventListener("click", function (e) {
  tabs.forEach(function (ele) {
    ele.classList.remove("active");
    e.currentTarget.classList.add("active");
  });
  photoshop.forEach(function (ele) {
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
  photoshop.forEach(function (ele) {
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

phTab.addEventListener("click", function (e) {
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
  photoshop.forEach(function (ele) {
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
  photoshop.forEach(function (ele) {
    ele.classList.add("hidden");
    ele.classList.remove("show");
  });
  js.forEach(function (ele) {
    ele.classList.add("show");
    ele.classList.remove("hidden");
  });
});
