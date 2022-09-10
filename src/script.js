import "./sass/main.sass";

const atomicElementsDivs = document.querySelectorAll(".container-element"),
  allElementsInfo = document.querySelectorAll(".info-element");

atomicElementsDivs.forEach((el) => {
  el.addEventListener("click", () => {
    const ELEMENT_INFO_ID = `#${el.id}-info`,
      elementInfo = document.querySelector(ELEMENT_INFO_ID);
    allElementsInfo.forEach((el) => el.classList.add("non-display"));
    elementInfo.classList.remove("non-display");
  });
});
