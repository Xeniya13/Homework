const result = document.getElementsByClassName('dropdown__value');
const list = document.getElementsByClassName('dropdown__list');

for (res of result) {
    res.addEventListener("click", () => {
        for (elem of list) {
            elem.classList.toggle('dropdown__list_active');
        }
    });
}

for (elem of list) {
    elem.addEventListener("click", (event) => {
        event.preventDefault();

        elem.classList.remove('dropdown__list_active');

        // console.log(event.target.innerText)
        for (res of result) {
            res.textContent = event.target.innerText;
        }
    })
}
