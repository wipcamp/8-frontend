"use strict";

$(document).ready(function(e){
  
  $('#scene').parallax({
    limitY: 1,
  });

  var tl = new TimelineMax({delay:5});
  // StartUP Preload
  TweenMax.to('.pre-logo .img-logo' , 1 ,{css:{transform:"scale(.2)",opacity:0},delay:2});
  TweenMax.to('#preload' , 3, {css:{opacity:0},delay:2,onComplete:function(){
    $('#preload').remove();
  }});
  TweenMax.from('.section .what', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});
  TweenMax.from('.section .who', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3.2});
  TweenMax.from('.section .when', 1,{css: {left: "44%", top: "39%", opacity: 0}, delay:3.4});
  TweenMax.from('.section .where', 1,{css: {right: "44%", top: "39%", opacity: 0}, delay:3.6});
  TweenMax.from('.section .faqs', 1,{css: {right: "44%", top: "39%", opacity: 0}, delay:3.8});
  TweenMax.from('.section .contact', 1,{css: {right: "44%", top: "39%", opacity: 0}, delay:4});
  TweenMax.from('.section .description', 1.5,{css: {opacity: 0}, delay:5});

  TweenMax.from('.layout .town-front', 1.5,{css: {bottom: "-100%"},ease: Back.easeOut.config(.5), delay: 5.2})
  TweenMax.from('.layout .town-mid', 1.5,{css: {bottom: "-100%"},ease: Back.easeOut.config(.5), delay: 5.8})
  TweenMax.from('.layout .town-back', 1.5,{css: {bottom: "-100%"},ease: Back.easeOut.config(.5), delay: 6.2});

  TweenMax.from('.layout .header', 2, {css: {top: "-100%"} ,delay:5.5});
  TweenMax.from('.reg', 2, {css: {opacity:0} ,delay:7});

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
          TweenMax.to($(name),1,{ left: "0%",delay: 0.2, ease:SlowMo.easeOut});
          $(name).addClass('active');
        }
        else if($(name).hasClass('right')){
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2, ease:SlowMo.easeIn});
          $(name).addClass('active');
        }else{
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2, ease:SlowMo.easeIn});
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

    // Reg
    $('.reg').click(function(){
      TweenMax.to('.pre-redirect', 1,{css:{opacity:1,visibility:"visible"}});
      TweenMax.to(".pre-redirect", 1, {className:"+=active",delay:1});
      TweenMax.from(".pre-redirect h1", 1, {css:{transform:"scale(.8)",opacity:0}, delay:.3})
    });
    $('.pre-redirect').click(function(){
      if($(this).hasClass("active")){
        TweenMax.to('.pre-redirect',1,{css:{opacity:0}});
        TweenMax.to('.pre-redirect',1,{css:{visibility:"hidden"},delay:1});
        TweenMax.to(".pre-redirect", 1, {className:"-=active",delay:1});
      }
    });

    // Starfall
      
      var randomPosX;
      var randomPosX2;
      var randomPosX3;
      var changePosX;

      // change random to Position X of Starfall
      if($('body').width() <= 1500){
          randomPosX = Math.random()*1000-500;
          randomPosX2 = Math.random()*1000-500;
          randomPosX3 = Math.random()*1000-500;
          changePosX = 900;
          
      }
      else if($('body').width() > 1500 && $('body').width() <= 2000){
          randomPosX = Math.random()*2000-1000;
          randomPosX2 = Math.random()*2000-1000;
          randomPosX3 = Math.random()*2000-1000;
          changePosX = 1300;
          
      }
      else if($('body').width() > 2000 && $('body').width() <= 2560){
          randomPosX = Math.random()*3200-1000;
          randomPosX2 = Math.random()*3200-1000;
          randomPosX3 = Math.random()*3200-1000;
          changePosX = 1700;
      }

      var setExplosion = function(bomb,randomSpeed){
            setTimeout(function(){
            $(bomb).css({left: (randomPosX+changePosX)});
            $(bomb).addClass('active');
            },randomSpeed);
            setTimeout(function(){
              $(bomb).removeClass('active');
              fall('.ds1','.exp1');
            },2500);
      } 

      function fall(el,bomb){     
        var randomSpeed = Math.random()*1.5+2;
        TweenMax.fromTo(el,randomSpeed,
          {css : {left: randomPosX, top:"-30%"}},
          {css : {left: (randomPosX+changePosX), top: "100%"},delay: 2.5,onComplete: function(){  
            setExplosion(bomb,randomSpeed);
          }
          }); 
        }
      var setExplosion2 = function(bomb,randomSpeed){
            setTimeout(function(){
            $(bomb).css({left: (randomPosX2+changePosX)});
            $(bomb).addClass('active');
            },randomSpeed);
            setTimeout(function(){
              $(bomb).removeClass('active');
              fall2('.ds2','.exp2');
            },2500);
      } 

      function fall2(el,bomb){      
        var randomSpeed = Math.random()*1.5+1;   
        TweenMax.fromTo(el,randomSpeed,
          {css : {left: randomPosX2, top:"-30%"}},
          {css : {left: (randomPosX2+changePosX), top: "100%"},delay: 2.5,onComplete: function(){  
            setExplosion2(bomb,randomSpeed);
          }
          }); 
        }
      var setExplosion3 = function(bomb,randomSpeed){
            setTimeout(function(){
            $(bomb).css({left: (randomPosX3+changePosX)});
            $(bomb).addClass('active');
            },randomSpeed);
            setTimeout(function(){
              $(bomb).removeClass('active');
              fall3('.ds3','.exp3');
            },2500);
      } 

      function fall3(el,bomb){    
        var randomSpeed = Math.random()*1.5+0.5;     
        TweenMax.fromTo(el,randomSpeed,
          {css : {left: randomPosX3, top:"-30%"}},
          {css : {left: (randomPosX3+changePosX), top: "100%"},delay: 2.5,onComplete: function(){  
            setExplosion3(bomb,randomSpeed);
          }
          }); 
        }
      
      setTimeout(function(){
        fall('.ds1','.exp1');
      },7000);
      
      setTimeout(function(){
        fall2('.ds2','.exp2');
      },9000);
      
      setTimeout(function(){
        fall3('.ds3','.exp3');
      },11000);

});