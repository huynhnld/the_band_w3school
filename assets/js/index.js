const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalCloses = document.querySelectorAll(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

//Hàm hiển thị modal mua vé (thêm call open vào modal)
function showBuyTickets() {
  modal.classList.add("open");
}
//chay ham close modal mua ve
function closeBuyTickets() {
  modal.classList.remove("open");
}
//chay vong lap lang nghe su kien click tung btn buy ticket
for (let buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
for (let modalClose of modalCloses) {
  modalClose.addEventListener("click", closeBuyTickets);
}
//NGhe hành vi CLICK vào button Close
modal.addEventListener("click", closeBuyTickets);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// RESPONSIVE FOR MOBILE

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
//tư động đóng khi chọn phần tử trong MENU
var menuItems = document.querySelectorAll('.nav li a[href*="#"]');
console.log("menuItems: ", menuItems);
for (i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  console.log("nextElementSibling: ", menuItem.nextElementSibling);
  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      console.log("this:", this);
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
