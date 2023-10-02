"use strict";
// Таби
const tabNavItems = document.querySelectorAll(".tabs-portfolio__button");
const tabItems = document.querySelectorAll(".item-tabs");
// 1-й етап це делагування, відслідковування натиску/кліку на об'єкт
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  // відсіюємо елементи
  if (targetElement.closest(".tabs-portfolio__button")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index;
        tabNavItem.classList.remove("active");
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add("active");
    tabItems[currentActiveIndex].classList.remove("active");
    tabItems[newActiveIndex].classList.add("active");
  }
});