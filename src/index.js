import loadHome from "./home-page";
import loadAbout from "./about";
import loadMenu from "./menu";

loadHome();

function pageLoader() {
    const homeBtn = document.querySelector('#home-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const aboutBtn = document.querySelector('#about-btn');
    const content = document.querySelector('#content');

    homeBtn.addEventListener('click', () => {
        content.textContent = '';
        loadHome();   
    })

    menuBtn.addEventListener('click', () => {
        content.textContent = "";
        loadMenu();
    })

    aboutBtn.addEventListener('click', () => {
        content.textContent = '';
        loadAbout();
    })

    

}

pageLoader();