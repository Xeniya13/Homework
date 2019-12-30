const modal = document.getElementById("modal_main");
const modalClose = document.getElementsByClassName("modal__close_times");
const modalSuccess = document.getElementById("modal_success");

modal.classList.add("modal_active");

for (const showSuccess of document.getElementsByClassName("show-success")) {
    showSuccess.addEventListener("click", () => {
        modalSuccess.classList.add("modal_active");
    });
}

for (const elem of modalClose) {
    elem.addEventListener("click", () => {
        modal.classList.remove("modal_active");
        modalSuccess.classList.remove("modal_active");
    });
}


