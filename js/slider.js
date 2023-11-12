
if (document.querySelector('.banners') != null) {
    const banners = document.querySelector('.banners');
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
    makeTimer();
    function makeTimer() {
        clearInterval(timer);
        timer = setInterval(() => showNextBanner('next'), 5000);
    }
}
