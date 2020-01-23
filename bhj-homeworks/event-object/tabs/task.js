let tab = document.getElementsByClassName('tab');
let tabNavigation = document.getElementsByClassName('tab__navigation');
let tabContent = document.getElementsByClassName('tab__content');

hideTabsContent(1);

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('tab__content_active');
        tab[i].classList.remove('tab_active');
    }
}

for (elem of tabNavigation) {
    elem.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList == 'tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    });
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('tab__content')) {
        hideTabsContent(0);
        tab[b].classList.add('tab_active');
        tabContent[b].classList.add('tab__content_active');
    }
}
