let menuBtn = document.querySelector(".menu_bar");
let navbar = document.querySelector(".navbar");
let overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  navbar.classList.toggle("show");
  overlay.classList.toggle("hidden");
});


const checkbox = document.getElementById("billing_address_checkbox");
const billingAddressContainer = document.querySelector(".billing_address_container");

        checkbox.addEventListener("change", function () {
  billingAddressContainer.style.display = checkbox.checked ? "flex" : "none";
});