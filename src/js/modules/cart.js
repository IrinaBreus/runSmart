const cart = () => {
    let btnMore = document.querySelectorAll('#more'),
        btnBack = document.querySelectorAll('#back'),
        blockMain = document.querySelectorAll('.catalog-item__main'),
        blockMore = document.querySelectorAll('.catalog-item__more');
    
    blockMore.forEach(item => {
        item.style.display = 'none';
    })

    btnMore.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentElement.style.display = 'none';
            this.parentElement.nextElementSibling.style.display = '';
        });
    });

    btnBack.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentElement.style.display = 'none';
            this.parentElement.previousElementSibling.style.display = '';
        });
    });
}

export default cart;