import "./sass/main.sass";

const AtomicElementsDivs = document.querySelectorAll(".container-element"),
  CurrentDisplayedElement = {
    element: document.querySelector("#H-info"),
    update(newElementId) {
      const NewElement = document.querySelector(newElementId);
      this.element.classList.add("non-display");
      NewElement.classList.remove("non-display");
      this.element = NewElement;
    },
  };

AtomicElementsDivs.forEach((el) => {
  el.addEventListener("click", () => {
    CurrentDisplayedElement.update(`#${el.id}-info`);
  });
});
