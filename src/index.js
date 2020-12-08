import { homeContent, menuContent, contactContent } from './pages'


homeContent()

const navItems = document.querySelectorAll('.navbar-item');
navItems.forEach(function(nav) {
    nav.addEventListener('click', function () {
        if (this.dataset.text === "home") {
            homeContent();
        } else if (this.dataset.text === "menu") {
            menuContent();
        } else if (this.dataset.text === "contact") {
            contactContent();
        }
    })
})