let time = document.getElementById('timer');

function timer() {
    time.innerHTML--;

    if (time.innerHTML == 0) {
        alert("Вы победили в конкурсе!");
        setTimeout(function () {}, 1000);
    } else {
        setTimeout(() => {
            timer()
        }, 1000);
    }
    console.log(time);

}

setTimeout(() => {
    timer();
}, 1000);
