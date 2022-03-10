const tabs = () => {
    let tabs = document.querySelectorAll('.catalog__tab');
    let content = document.querySelectorAll('.catalog__content');
    let blockMain = document.querySelectorAll('.catalog-item__main');
    let blockMore = document.querySelectorAll('.catalog-item__more');

    showTabs(); 
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', function() {
            showTabs(i);
        })
    })

    function showTabs(n = 0) {
        tabs.forEach(tab => tab.classList.remove('catalog__tab_active'));
        content.forEach(elem => {
            elem.style.display = 'none';
            clearClass(blockMain, 'slideFromLeft');
            clearClass(blockMore, 'slideFromRight')
        });
        tabs[n].classList.add('catalog__tab_active');
        content[n].style.display = '';
    }
    function clearClass(elems, className) {
        elems.forEach(elem => {
            if (elem.classList.contains(className)) {
                elem.classList.remove(className);
            };
        });
    }
}

export default tabs;