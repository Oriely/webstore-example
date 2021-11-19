class slideshow {
    constructor(slidesClass) {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll(slidesClass);
        this.sliderTimer = null;
        this.timeToShow = 5000;
    }
    start() {
        this.slides[this.currentSlide].style.display = 'block';
        this.sliderTimer = setInterval(() => this.next(),this.timeToShow, true);
    }

    next()  {
        const slidesLength = this.slides.length;

        this.slides[this.currentSlide].style.display = 'none';

        this.currentSlide++;

        if(this.currentSlide == slidesLength) this.currentSlide = 0;

        console.log(this.currentSlide);
        this.slides[this.currentSlide].style.display = 'block';
    }

    prev() {
        const slidesLength = this.slides.length;
        this.slides[this.currentSlide].style.display = 'none';

        --this.currentSlide;

        if(this.currentSlide < 0) this.currentSlide = slidesLength - 1;
        this.slides[this.currentSlide].style.display = 'block';
    }

    
    stop() {
        return clearInterval(this.sliderTimer);
    }
}

const promotion = new slideshow('.promotion-image');
promotion.start();

const nextSlideButton = document.querySelector('.next-slide');
const prevSlideButton = document.querySelector('.prev-slide');

nextSlideButton.addEventListener('click',() => {
    promotion.stop();
    promotion.next();
});

prevSlideButton.addEventListener('click',() => {
    promotion.stop();
    promotion.prev();
});