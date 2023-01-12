document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#mproducto', {
    fixedHeight: 475,
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
    } );

    var iconos = new Splide( '#cproducto', {
            fixedWidth: 100,
            fixedHeight: 80,
            gap       : 10,
            rewind    : true,
            pagination: false,
            isNavigation: true,
            focus: 'center',
            mediaQuery: 'min',
            breakpoints: {
            400: {
            fixedWidth : 60,
            fixedHeight: 44,
            },
            classes: {
            slide: 'splide__slide splide__slide1',
         },
        },
    } );

    main.sync( iconos );
    main.mount();
    iconos.mount();
} );  


.splide__slide1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

.splide__slide1 {
    opacity: 0.6;
  }
  
.splide__slide1.is-active {
    opacity: 1;
  }
.splide__slide2 img {
width: 100%;
height: 100%;
object-fit: cover;
}