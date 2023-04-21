import "./sass/main.sass";

// The main function to handle the display of information about atomic elements.

function main() {
  const AtomicElementsDivs = document.querySelectorAll(".container-element"),
  /**
    An object that keeps track of the currently displayed atomic element information and provides a method to update it.
      @property element - The HTML element that currently displays the atomic element information.
      @property update - A method that updates the currently displayed atomic element information to the element with the provided ID.
  */
    CurrentDisplayedElement = {
      element: document.querySelector("#H-info"),
      update(newElementId) {
        const NewElement = document.querySelector(newElementId);
        this.element.classList.add("non-display");
        NewElement.classList.remove("non-display");
        this.element = NewElement;
      },
    };

  /**
    Add a click event listener to each ".container-element" element to update the displayed atomic element information.
  */

  AtomicElementsDivs.forEach((el) => {
    el.addEventListener("click", () => {
      CurrentDisplayedElement.update(`#${el.id}-info`);
    });
  });
}

// Execute the main function on page load.

window.addEventListener("load", main);
