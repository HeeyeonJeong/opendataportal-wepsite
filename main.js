// //header button focus시 drop menu 활성화
const dropButton = document.querySelectorAll(".js-dropbutton");
const dropDownContent = document.querySelectorAll(".header-dropmenu-content");

for (let i = 0; i < dropButton.length; i++) {
  dropButton[i].addEventListener("click", function (e) {
    if (!dropDownContent[i].classList.contains("show")) {
      dropDownContent[i].classList.add("show");
      closeDropMenu(e);
    }
  });
}

function closeDropMenu(e) {
  for (let i = 0; i < dropButton.length; i++) {
    if (e.target !== dropButton[i] || !this) {
      dropDownContent[i].classList.remove("show");
    }
  }
}
