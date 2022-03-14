const scrollUp = () => {
    const arrow = document.querySelector('.pageup');

    arrow.classList.remove('fadeIn', 'fadeOut');
    
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1600) {
            
            arrow.classList.add('fadeIn');
            arrow.classList.remove('fadeOut');
        } else {
            arrow.classList.add('fadeOut');
            arrow.classList.remove('fadeIn');
        };
    });
}

export default scrollUp;