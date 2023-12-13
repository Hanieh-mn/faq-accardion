const accord = document.querySelectorAll('.accardion-title');

accord.forEach(item => {
    item.addEventListener('click',function() {
        const image = item.children[1];
        const content = item.nextElementSibling;
        if(content.style.height) {
            content.style.height = null;
            image.src = 'images/icon-plus.svg';
        } else {
            content.style.height = content.scrollHeight + 'px';
            image.src = 'images/icon-minus.svg';
        }
    })
})

