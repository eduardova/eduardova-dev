import { actions } from "./general-actions.js";
import { goTo } from "./general.js";

actions.scrollActions.push(() => {
    let btnLang = document.querySelector(".btn-lang");
    btnLang.style.display = !(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? 'block' : 'none';
});

actions.ready.push(
    ()=> {
        document.querySelector('.btn-lang').addEventListener('click', function () {
            goTo(this.dataset.currentPath === 'es' ? './portfolio.html' : '/');
        });
    },
    () => {
        if( document.querySelector('.btn-lang').dataset.currentPath === 'en') {
            const links = document.querySelectorAll('.navbar-nav a');
            links[0].innerHTML = 'Portfolio';
            links[2].innerHTML = 'Articles';
        }
    }
);
