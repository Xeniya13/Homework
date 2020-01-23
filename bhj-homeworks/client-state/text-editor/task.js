const editor = document.getElementById('editor');
const buttonClear = document.getElementById('btn');

const init = () => {
    editor.textContent = localStorage.getItem('text');
}

editor.addEventListener('input', (event) => {
    const text = event.target.value;
    localStorage.setItem('text', text);
});

buttonClear.addEventListener('click', () => {
    localStorage.removeItem('text');
    editor.textContent = '';
});

init();
