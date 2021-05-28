document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector('.splide') === null) {
        return;
    }

    const width = window.innerWidth
    console.log(width);

    if (width > 400) {
        let height = window.innerHeight - 150;
        if (height > 700) {
            height = 700
        }
        new Splide( '.splide', {
            type: 'loop',
            height: height
        }).mount();
    } else {
        new Splide( '.splide', {
            type: 'loop'
        }).mount();
    }
});
