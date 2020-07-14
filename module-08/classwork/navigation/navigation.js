import {
    productForm
} from '../forms/productForm.js'

import {
    homePage
} from "../pages/homePage.js"
import {
    profilePage
} from '../pages/profilePage.js';
import {
    productsPage
} from '../pages/productsPage.js';


export const navigation = () => {
    const navigation = document.querySelector('.navigation'); //ul
    const activeLink = navigation.querySelector('.navigationLink a');
    const content = content.querySelector('.content'); //div
    activeLink.classList.add("activeNavigationLink"); //firstElement of ul
    getContent(activeLink);


    const setActiveLink = (e) => {
        e.preventDefault();
        // console.log(e.target);
        if (e.target === e.currentTarget) {
            return
        }
        const activeLink = navigation.querySelector('.activeNavigationLink');
        (activeLink) && activeLink.classList.remove('activeNavigationLink');
        e.target.classList.add('activeNavigationLink');
        getContent(e.target);
    }

    function getContent(link) {
        const activeLink = link.dataset.navlink;
        switch (activeLink) {
            case "Home":
                homePage(content);
                break;
            case "Products":
                content.innerHTML = "";
                break;
            case "Profile":
                profilePage(content);
                break;
            case "Cart":
                content.innerHTML = "";
                break;

            default:
                homePage(content);
                break;
        }
    }

    navigation.addEventListener('click', setActiveLink);

}
// navigation();