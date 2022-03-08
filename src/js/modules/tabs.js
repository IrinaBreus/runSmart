const tabs = () => {
    let tabs = document.querySelectorAll('.catalog__tab');
    let content = document.querySelectorAll('.catalog__content');

    showTabs(); 
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', function() {
            showTabs(i);
        })
    })

    function showTabs(n = 0) {
        tabs.forEach(tab => tab.classList.remove('catalog__tab_active'));
        content.forEach(elem => elem.style.display = 'none');
        tabs[n].classList.add('catalog__tab_active');
        content[n].style.display = '';
    }
}

export default tabs;