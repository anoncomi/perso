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
          },
      } );

      main.sync( iconos );
      main.mount();
      iconos.mount();
  } );  