"use strict";

$(document).ready(function(e){
  
  // $('#scene').parallax();

  // StartUP Preload

  TweenMax.from('.section .what', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});
  TweenMax.from('.section .who', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});
  TweenMax.from('.section .where', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});
  TweenMax.from('.section .when', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});
  TweenMax.from('.section .faqs', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});
  TweenMax.from('.section .contact', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});
  TweenMax.from('.section .description', 1,{css: {opacity: 0}, delay:4.5});
  TweenLite.set("#element", {clearProps:"all"});
  // Section
    var chkPop = 0;

    $('.sec').click(function(e){
      e.stopPropagation();
      var section = $(this).data('sec');
      // console.log(section);

      var name = ".pop-"+section;

      if(chkPop == 0){
        if($(name).hasClass('left'))
        {
          TweenMax.to($(name),1,{ left: "0%",delay: 0.2,  ease:SlowMo.easeOut});
          $(name).addClass('active');
        }
        else if($(name).hasClass('right')){
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2,  ease:SlowMo.easeIn});
          $(name).addClass('active');
        }else{
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2,  ease:SlowMo.easeIn});
          TweenMax.to(".pop-where .image-wippo", 1,{css:{left: 0,opacity: 1}});
          $(name).addClass('active');
        }
        TweenMax.to(".overlay", 1, {className:"+=active"});
        TweenMax.to("#scene", 2, {transform:"scale(1.4)"});

        chkPop++;
        
      }
    });

    $(' .overlay , .triangle , .exit').click(function(){
     if($('#popup .popup').find('.active') && chkPop == 1){
        var item = $('#popup').find('.active');
        if($(item).hasClass('left')){
          TweenMax.to(item,1,{ left: "-100%",  ease:SlowMo.easeIn});
          item.removeClass('active');
        }
        else if ($(item).hasClass('right'))
        {
          TweenMax.to(item,1,{ right: "-100%",  ease:SlowMo.easeIn});
          item.removeClass('active');
        }else{
          TweenMax.to(item,1,{ right: "-100%",  ease:SlowMo.easeIn});
          TweenMax.to(".pop-where .image-wippo", 1,{css:{left: "-200%",opacity: 0}});
          item.removeClass('active');
        }
        TweenMax.to(".overlay", 1, {className:"-=active"});
        TweenMax.to("#scene", 1, {transform:"scale(1)"})
        chkPop--;

        $('.loy-outer').removeClass('loyBig');
        $('.loy-outer').removeClass('delay');
        $('.inner-descript').removeClass('upText');
        $('#line').removeClass('when'); 
        
     }
    });

    // FAQ
    $('.accordion').click(function () {
        if (!($(this).next().is(':visible'))) {
          $('.accContent').slideUp('600');
        }else{
          $('.accContent').not($(this).next()).slideUp('600');
        }

        if ($(this).next().is(':hidden') == true) {
            $(this).next().slideDown('600');
        }
    });
    $('.accContent').hide(); // Hide Content
    $('.accContent.first').show();


    // When
    $('.when').click(function(){
      // Chang Big circle //
      $('.loy1').find(".loy-outer,.inner-descript").addClass('loyBig');
      $('.loy-outer').addClass('delay');
      $('#line').addClass('when');
      $('.inner-descript').addClass('upText');
    });


});