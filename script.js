// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const content = document.querySelector(".collapsible .content");

    toggleButton.addEventListener("click", () => {
        content.classList.toggle("open");
    });
});
