$(document).ready(function(){

   let $btn = $('.portfolio .buttons button');

   $btn.click(function(e){
  $('.portfolio .buttons button').removeClass('.active');
  e.target.classList.add('.active');

  let selector = $(e.target).attr('data-filter');
  $('.portfolio .grid').isotope({
      filter:selector
  });
  return false;
   })

   $('.portfolio .buttons #btn1').trigger('click');
   $('.portfolio .grid .test-popup-link').magnificPopup({
       type:'image',
       gallery:{enabled:true}
   });

   $('.owl-carousel').owlCarousel({
       dots: true,
       loop: true,
       autoplay: true,
       responsive:{
           0:{
               items:1
           },
           544:{
               items:2
           }
       }
   });
});