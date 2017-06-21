function navMenuExpand() {
    document.getElementById('menu-button').onclick = function(e) {
        document.getElementById('menu').classList.toggle('nav__menu--expand');
    }
}

window.addEventListener('load', navMenuExpand, false);