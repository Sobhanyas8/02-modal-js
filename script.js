"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener("click", () => {
    // console.log(btnsOpenModal[i].textContent);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

// this is for closing modal by closing button
btnCloseModal.addEventListener("click", closeModal);
// this is for clicking outside of modal to close modal
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
