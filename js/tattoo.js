//burger

let burger = document.querySelector(".header__icon");
let headerMenu = document.querySelector(".header__menu");
burger.addEventListener("click", function (event) {
  headerMenu.classList.toggle("_active");
  burger.classList.toggle("_active");
  document.body.classList.toggle("_lock");
});
let headerLinks = document.querySelectorAll(".header__link");
for (let link of headerLinks) {
  link.addEventListener("click", function (e) {
    if (headerMenu.classList.contains("_active")) {
      headerMenu.classList.toggle("_active");
      document.body.classList.toggle("_lock");
      burger.classList.toggle("_active");
    }
  });
}

//services
let spoilerItems = document.querySelectorAll(".services__item");
spoilerItems.forEach((item) => {
  item.addEventListener("mousedown", function (e) {
    e.preventDefault();
  });
  item.addEventListener("click", function (e) {
    item.classList.toggle("_active");
  });
});

// inputs
let inputs = document.querySelectorAll("input");
for (let input of inputs) {
  input.addEventListener("focus", function (e) {
    input.classList.add("_focused");
  });
}
