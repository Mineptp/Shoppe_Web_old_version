var modal = document.querySelector(".js-modal");
var modal_content = document.querySelectorAll(".js-modal-container");
var modal_res = document.querySelector(".js-modal-resig");
var modal_login = document.querySelector(".js-modal-login");
var modal_overlay = document.querySelector(".js-modal-overlay");

var btn_res = document.querySelector(".js-btn-resig");
var btn_login = document.querySelector(".js-btn-login");
var switchToRegisterBtn = document.querySelector(".js-modal-switch-res");
var switchToLoginBtn = document.querySelector(".js-modal-switch-login");

console.log(modal, btn_res, btn_login, modal_res, modal_login, modal_overlay);

function openModal(type) {
  modal.classList.add("modal-open");

  modal_login.style.display = "none";
  modal_res.style.display = "none";

  if (type === "login") {
    modal_login.style.display = "block";
    console.log("Modal Login opened");
  } else if (type === "resign") {
    modal_res.style.display = "block";
    console.log("Modal Register opened");
  } else {
    console.error("Loại modal không hợp lệ:", type);
    return; // Dừng hàm nếu loại không hợp lệ
  }

  // Nếu modal cha là cần thiết
}

modal_overlay.onclick = function close_modal() {
  modal.classList.remove("modal-open");
  modal_login.style.display = "none";
  modal_res.style.display = "none";
  modal_res.style.animation = null;
  modal_login.style.animation = null;

  // Để kiểm tra xem hàm có chạy không
};
modal_content.onclick = function (event) {
  event.stopPropagation();
  console.log("Đã click vào modal-content, không đóng modal");
};

btn_login.onclick = function () {
  openModal("login");
};
btn_res.onclick = function () {
  openModal("resign");
};

switchToRegisterBtn.onclick = function () {
  modal_login.style.display = "none";
  modal_res.style.display = "block";
  console.log("Switched to Register");
  modal_login.style.animation = "unset";
};

switchToLoginBtn.onclick = function () {
  modal_login.style.display = "block";
  modal_res.style.display = "none";
  console.log("Switched to Register");
  modal_res.style.animation = "unset";
};
