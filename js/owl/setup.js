$('.owl-carousel').owlCarousel({
    loop:true, /*true - faz o carrosel recomeçar após o ultimo filme*/
    margin:10, /*tamanho do espaçamento entre um filme e outro*/
    nav:true, /*Botão de navegação. False - desabilita ele*/
    /*Responsividade, os itens se ajustam de acordo com as diferentes telas */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        /*Quando a tela tiver mais de 100px, pode colocar 5 itens ou mais */
        1000:{
            items:5
        }
    }
})