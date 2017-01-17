$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:false,
  responsive:{
    0:{
      items:2,
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

myParaxify = paraxify('.paraxify');