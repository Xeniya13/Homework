const modal = document.getElementById('subscribe-modal');
const modalClose = document.getElementsByClassName('modal__close');
const local = localStorage.getItem('close');

setTimeout(() => {
    if (localStorage.getItem('close') == 'true') {
        modal.classList.remove('modal_active');
    } else {
        modal.classList.add('modal_active');
    }
}, 1000);

for (elem of modalClose) {
    elem.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        localStorage.setItem('close', 'true');
    });
}
