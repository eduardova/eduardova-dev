import { actions } from "./general-actions.js";

actions.scrollActions.push(
    () => {
        const btnBack = document.getElementById("back-to-top");
        btnBack.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        btnBack.style.display = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? 'block' : 'none';
    }
);

document.addEventListener('DOMContentLoaded', () => {
    window.onscroll = () => actions.scrollActions.forEach(scrollFn => scrollFn());
    actions.ready.forEach(scrollFn => scrollFn());
});

export const goTo = (link = '/') => {
    location.href = link;
}