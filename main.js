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

//main search ranking slide
const rankingBtn = document.querySelector(".js-rankingButton");

let rankingList = [
  "1. 코로나",
  "2. 건강검진",
  "3. 한국가스공사_월별 천연가스 생산량",
  "4. 지하철",
  "5. 미세먼지",
];

var i = 0;
var interval = setInterval(function () {
  if (i > 4) {
    i = 0;
  }
  rankingBtn.innerHTML = rankingList[i];
  i++;
}, 2000);

setTimeout(function () {
  clearInterval(interval);
}, 60000);
