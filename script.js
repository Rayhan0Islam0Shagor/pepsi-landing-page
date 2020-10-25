function imgSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

function changeBgColor(bgColor) {
    const sec = document.querySelector('.sec');
    sec.style.background = bgColor;
}

function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    toggleMenu.classList.toggle('active')
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active')
}