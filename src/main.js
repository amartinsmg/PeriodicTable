import "./sass/main.sass";

// The main function to handle the display of information about atomic elements.

function main() {
  const atomicElementsDivs = document.querySelectorAll(".container-element");

  /**
    An object that keeps track of the currently displayed atomic element information and provides a method to update it.
      @property _element - The HTML element that currently displays the atomic element information.
      @property update - A method that updates the currently displayed atomic element information to the element with the provided ID.
  */

  const currentDisplayedEl = {
    _element: document.querySelector("#H-info"),
    update(newElement) {
      this._element.classList.add("non-display");
      newElement.classList.remove("non-display");
      this._element = newElement;
    },
  };

  // Add a click event listener to each ".container-element" element to update the displayed atomic element information.

  atomicElementsDivs.forEach((el) => {
    el.addEventListener("click", () => {
      const infoElement = document.querySelector(`#${el.id}-info`);
      currentDisplayedEl.update(infoElement);
    });
  });
}

// Execute the main function on page load.

window.addEventListener("load", main);
