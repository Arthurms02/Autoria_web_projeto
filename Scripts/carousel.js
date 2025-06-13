document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-slide .carousel-item'); // Seleciona os itens (li)
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');

    let counter = 0; // Índice do item atual
    // A largura do item é a largura do primeiro item. Isso deve ser a largura do carousel-container.
    // Garanta que o carousel-item e o carousel-container tenham a mesma largura base (ex: 600px).
    const itemWidth = carouselItems[0].clientWidth;

    // Lógica para mover o carrossel
    function slideCarousel() {
        carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
    }

    // Botão Próximo
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselItems.length - 1) { // Se estiver no último item
            counter = 0; // Volta para o primeiro
        } else {
            counter++; // Avança para o próximo
        }
        slideCarousel();
    });

    // Botão Anterior
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) { // Se estiver no primeiro item
            counter = carouselItems.length - 1; // Vai para o último
        } else {
            counter--; // Volta para o anterior
        }
        slideCarousel();
    });

    // Opcional: Auto-play
    // setInterval(() => {
    //     nextBtn.click(); // Simula o clique no botão Próximo a cada 3 segundos
    // }, 3000);
});