import "./sass/main.sass";

const AtomicElementsDivs = document.querySelectorAll(".container-element");
let CurrentDisplyedElemenet = document.querySelector("#H-info");

AtomicElementsDivs.forEach((el) => {
  el.addEventListener("click", () => {
    const ElementInfo = document.querySelector(`#${el.id}-info`);
    CurrentDisplyedElemenet.classList.add("non-display");
    ElementInfo.classList.remove("non-display");
    CurrentDisplyedElemenet = ElementInfo;
  });
});
