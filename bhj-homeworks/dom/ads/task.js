const rotatorCase = document.getElementsByClassName("rotator__case");

let i = 0;
let elements = [];

for (elem of rotatorCase) {
    elements.push(elem);
}

function timer() {

    if (i === elements.length - 1) {
        elements[i].classList.remove("rotator__case_active");
        elements[0].classList.add("rotator__case_active");
        i = 0;
    } else {
        elements[i].classList.remove("rotator__case_active");
        elements[i + 1].classList.add("rotator__case_active");
        i++;
    }
}

setInterval(timer, Number(elements[i].getAttribute("data-speed")));
