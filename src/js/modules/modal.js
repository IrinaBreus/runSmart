let modal = () => {
    let orderBtn = document.querySelectorAll('[data-modal="order"]'),
        buyBtn = document.querySelectorAll('.button_catalog'),
        overlay = document.querySelector('.overlay'),
        modalConsultation = overlay.querySelector('#consultation'),
        modalOrder = overlay.querySelector('#order'),
        modalThanks = overlay.querySelector('#thanks'),
        closeBtn = overlay.querySelectorAll('.modal__close'),
        btnThanks = document.querySelectorAll('[data-btn="thanks"]');

    orderBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            showModal(overlay);
            showModal(modalConsultation);
        })
    });

    buyBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            let parent = this.parentElement.parentElement.querySelector('.catalog-item__subtitle');
            let txt = parent.textContent;
            let title = modalOrder.querySelector('.modal__subtitle');
            title.innerHTML = txt;
            showModal(overlay);
            showModal(modalOrder);
        })
    });

    btnThanks.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            let inputs = this.parentElement.querySelectorAll('input');
            inputs.forEach(input => {
                if (!input.value) {
                    switch (input.name) {
                        case 'name':
                            changeInput(input);
                            break;
                        case 'phone':
                            changeInput(input);
                            break;
                        case 'email':
                            changeInput(input);
                            break;
                    }
                } 
            });
           if (inputs[0].value && inputs[1].value && inputs[2].value) {
                    hiddenModal(modalConsultation);
                    hiddenModal(modalOrder);
                    hiddenModal(overlay);
                    showModal(overlay);
                    showModal(modalThanks);
                        
                    setTimeout(() => {
                        this.parentElement.reset();
                        inputs.forEach(input => input.style.border = 'none');
                        hiddenModal((overlay));
                        hiddenModal(modalThanks)
                    }, 2000);
                }
            
        });
    });
    
    closeBtn.forEach(btn => {
        btn.addEventListener('click', ()  => {
            hiddenModal(overlay);
            // document.body.style.overflow = '';
        })
    });

    document.addEventListener('click', (e) => {
        if (e.target == overlay) {
            hiddenModal(overlay);
        };
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && overlay.style.display == 'block') {
            hiddenModal(overlay);
        };
    })

    function showModal(elem) {
        elem.style.display = 'block';
        // document.body.style.overflow = 'hidden';
    }

    function hiddenModal(elem) {
        elem.style.display = 'none';
    }

    function changeInput(input) {
        input.style.border = '2px solid red';
        input.addEventListener('change', () => {
            input.style.border = '2px solid green';
        })
    }
}

export default modal;