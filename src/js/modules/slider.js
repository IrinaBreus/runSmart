const slider = () => {
    let slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot'),
        btnNext = document.querySelector('.carousel__arrow_right'),
        btnPrev = document.querySelector('.carousel__arrow_left');

    let index = 0;

    showSlide(index);

    btnNext.addEventListener('click', () => {
        index == slides.length - 1 ? index = 0 : index++;
        showSlide(index);
        addClass('slideFromLeft', 'slideFromRight');
    });

    btnPrev.addEventListener('click', () => {
        index == 0 ? index = slides.length - 1 : index--;
        showSlide(index);
        addClass('slideFromRight', 'slideFromLeft');
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            showSlide(i);
            dotsStyle(index);
            e.target.style.opacity = '1';
        })
    })

    function dotsStyle(index) {
        dots.forEach(dot => dot.style.opacity = '0.7');
        dots[index].style.opasity = '1';
    }

    function addClass(removeClass, addClass) {
        slides[index].classList.add(addClass);
        slides[index].classList.remove(removeClass);
    }

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = '';
    }
}

export default slider;