$(document).ready(->
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    responsive:{
      0:{
        items:3,
      },
      600:{
        items:4,
        nav:false
      },
      1000:{
        items:6,
      }
    }
  })

  $('.section .grid .ui.bordered.image')
  .dimmer({
    on: 'hover'
  })
  ;

  paraxify('.paraxify');


  initMap = ->
    uluru = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });

    marker = new google.maps.Marker
      position: uluru
      map: map
);
