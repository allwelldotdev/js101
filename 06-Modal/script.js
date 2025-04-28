"use strict";

// Selecting elements
const modalBtnsEl = document.getElementsByClassName("show-modal");
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// Add event listener to all btns: Open modal

// modalBtnsEl.forEach((el) => {
//   el.addEventListener("click", () => {
//     modalEl.classList.remove("hidden");
//     overlayEl.classList.remove("hidden");
//   });
// });

// Learned here that '.getElementsByClassName()' does not have '.forEach()' method.
for (let i = 0; i < modalBtnsEl.length; i++) {
  modalBtnsEl[i].addEventListener("click", () => {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
  });
}

// Close modal ops
const arrCloseModal = [btnCloseModal, overlayEl];
arrCloseModal.forEach((el) => {
  el.addEventListener("click", () => {
    modalEl.classList.add("hidden");
    overlayEl.classList.add("hidden");
  });
});
