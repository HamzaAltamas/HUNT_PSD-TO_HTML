// banner slider


$('.slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'.prev',
    nextArrow:'.next'
  });
  // bannertyped

var typed = new Typed('.element', {
    strings: ['ESIGNER', 'EVELOPER','ESIGNER'],
    smartBackspace: true ,
    typeSpeed: 100,
    loop:true
  });
      
  // navbar scroll
$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 10){
      $("nav").addClass("navdown")
    }else{
       $("nav").removeClass("navdown")
    }
    if(scrolling > 10){
      $(".backtop").fadeIn(1000)
    }else{
       $(".backtop").fadeOut(1000)
    }
   
    
  })

  // about us hover
  
  $(".abouttxt").hover(function(){
    $(".dots").addClass(".bgcolor")
    
  });

  // service slider

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'.prevv',
    nextArrow:'.nextv',
    vertical:true,
    centerMode:true,
    centerPadding:"0"
  });


  // testimonial slider

  $('.akta').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
    asNavFor: '.charta'
  });
  $('.charta').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.akta',
    prevArrow:'.prevvvv',
    nextArrow:'.nextvvv',
    centerMode: true,
    focusOnSelect: true,
    vertical:true,
    centerMode:true,
    centerPadding:"0"
  });
 

// counter

$('.counter').counterUp({
  delay: 30,
  time: 1000
});

// brand slide

$('.slidebrand').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:false,
  nextArrow:false
});

// preloader

var typed = new Typed('.loader', {
  strings: ['elcome to HUNT...'],
  typeSpeed: 150,
  loop:true
});

// // preloader
$('.js-preloader').preloadinator({

  animation: 'fadeOut',

  animationDuration: 6000

});

// backtop button
$(".backtop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },
  )
},)

  