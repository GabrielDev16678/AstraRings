document.addEventListener('DOMContentLoaded', function() {
    setupCarousels();
    setupHeaderIcons();
    setupProductCards();
});


function setupCarousels() {
    const carousels = [
        { id: 'cartier-carousel', nextBtn: document.querySelectorAll('.nav-button')[0] },
        { id: 'pandora-carousel', nextBtn: document.querySelectorAll('.nav-button')[1] },
        { id: 'tiffany-carousel', nextBtn: document.querySelectorAll('.nav-button')[2] }
    ];
    
    carousels.forEach(carousel => {
        const container = document.getElementById(carousel.id);
        const nextBtn = carousel.nextBtn;
        
        if (container && nextBtn) {
            nextBtn.addEventListener('click', function() {
                scrollCarousel(container);
            });
        }
    });
}


function scrollCarousel(container) {
    const cardWidth = 220;
    container.scrollBy({
        left: cardWidth * 2,
        behavior: 'smooth'
    });
    

    setTimeout(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {
            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    }, 500);
}


function setupHeaderIcons() {
    document.querySelector('.search-icon').addEventListener('click', function() {
        alert('Buscar produtos');
    });
    
    document.querySelector('.cart-icon').addEventListener('click', function() {
        alert('Abrir carrinho de compras');
    });
    
    document.querySelector('.user-icon').addEventListener('click', function() {
        alert('Acessar conta do usuário');
    });
}


function setupProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-title').textContent;
            const productPrice = this.querySelector('.product-price').textContent;
            
            alert(`Produto: ${productName}\nPreço: ${productPrice}`);
        });
    });
}