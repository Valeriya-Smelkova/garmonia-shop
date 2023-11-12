if (document.querySelector('.header-block-3-mobile-menu-button') != null) {
    const mobileMenuButton = document.querySelector('.header-block-3-mobile-menu-button');
    const mobileMenuList = document.querySelector('.header-block-3-mobile-menu-holder');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuList.classList.toggle('hidden');
    });
}
if (document.querySelector('.header-block-1-mobile-menu-button') != null) {
    const mobileMenuBurger = document.querySelector('.header-block-1-mobile-menu-button');
    const mobileHeaderMenuList = document.querySelector('.header-block-1-after-mobile-menu');
    mobileMenuBurger.addEventListener('click', () => {
        mobileHeaderMenuList.classList.toggle('hidden');
    });
}
