//Slider start
if (document.querySelector('.banners') != null) {
    const banners = document.querySelector('.banners ul');
    const bannersItems = Array.from(banners.children);
    const pagination = document.querySelector('.slider-pagination ul');
    const paginationItems = document.querySelectorAll('.pagination-point');
    const btnNext = document.querySelector('.right-arrow');
    const btnPrev = document.querySelector('.left-arrow');
    bannersItems[0].setAttribute('banner-active', '');
    paginationItems[0].setAttribute('point-active', '');
    paginationItems[0].classList.add('pagination-point_active');
    bannersItems.forEach((banner, index) => {
        if (index !== 0) banner.classList.add('hidden');
        banner.setAttribute('index', `${index}`);
    })
    paginationItems.forEach((point, index) => {
        point.setAttribute('index', `${index}`);
    })
    btnNext.onclick = function () {
        showNextBanner('next');
        makeTimer();
    }
    btnPrev.onclick = function () {
        showNextBanner('prev');
        makeTimer();
    }
    function showNextBanner(direction) {
        const currentBanner = banners.querySelector('[banner-active]');
        const currentBannerIndex = +currentBanner.getAttribute('index');
        const currentPoint = pagination.querySelector('[point-active]');
        currentBanner.classList.add('hidden');
        currentBanner.removeAttribute('banner-active');
        currentPoint.classList.remove('pagination-point_active');
        currentPoint.removeAttribute('point-active');
        let nextBannerIndex;
        if (direction === 'next') {
            nextBannerIndex = currentBannerIndex + 1 === bannersItems.length ? 0 : currentBannerIndex + 1;
        } else if (direction === 'prev') {
            nextBannerIndex = currentBannerIndex === 0 ? bannersItems.length - 1 : currentBannerIndex - 1;
        }
        const nextBanner = banners.querySelector(`[index="${nextBannerIndex}"]`);
        const nextPoint = pagination.querySelector(`[index="${nextBannerIndex}"]`);
        nextBanner.classList.remove('hidden');
        nextBanner.setAttribute('banner-active', '');
        nextPoint.classList.add('pagination-point_active');
        nextPoint.setAttribute('point-active', '');
    }
    paginationItems.forEach(point => {
        point.addEventListener('click', (point) => {
            const currentBanner = banners.querySelector('[banner-active]');
            const currentPoint = pagination.querySelector('[point-active]');
            currentBanner.classList.add('hidden');
            currentBanner.removeAttribute('banner-active');
            currentPoint.classList.remove('pagination-point_active');
            currentPoint.removeAttribute('point-active');
            const nextPointIndex = +point.target.getAttribute('index');
            const nextBanner = banners.querySelector(`[index="${nextPointIndex}"]`);
            const nextPoint = point.target;
            nextBanner.classList.remove('hidden');
            nextBanner.setAttribute('banner-active', '');
            nextPoint.classList.add('pagination-point_active');
            nextPoint.setAttribute('point-active', '');
            makeTimer();
        });
    })
    var timer = 0;
    function makeTimer() {
        clearInterval(timer);
        timer = setInterval(() => showNextBanner('next'), 5000);
    }
    makeTimer();
}
//Slider end

//Success/warning start
if (document.querySelector('.message-box') != null) {
    const messageBox = document.querySelector('.message-box');
    const closeButton = document.querySelector('.message-box .x');
    closeButton.addEventListener('click', () => {
        messageBox.style.display = 'none';
    });
}
//Success/warning end

//Favorite start
const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach (likeButton => {
    likeButton.addEventListener('click', (likeButton) => {
        likeButton.target.classList.toggle('like_liked');
    });
})
//Favorite end

//Mobile menu start
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
//Mobile menu end

//Product quantity changer start
var quantity_changers = document.querySelectorAll('.product-quantity-changer');
if (quantity_changers != null) {
    quantity_changers.forEach(quantity_changer => {
        quantity_changer.onclick = function (quantity_changer) {
            quantity_input = this.querySelector('input');
            value = parseInt(quantity_input.value);
            if (quantity_changer.target.className == 'plus') {
                value += 1;
                quantity_input.value = value;
            }
            if (quantity_changer.target.className == 'minus') {
                if (value != 0) {
                    value -= 1;
                    quantity_input.value = value;
                }
            }
        };
    })
}
//Product quantity changer end