"use strict";

$(document).ready(function(e){

  detectIE();

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   // some code..
   window.location.replace("http://site.freezer.wip.camp/old_version");
  }

  $('#scene').parallax({
    limitY: 1,
  });

  var star = new TimelineMax({delay:7});
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
  TweenMax.from('.section .description', 1.5,{css: {opacity: 0}, delay:4.8});

  TweenMax.from('.layout .town-front', 1.5,{css: {bottom: "-100%"}, delay: 5.5})
  TweenMax.from('.layout .town-mid', 1.5,{css: {bottom: "-100%"},ease: Back.easeOut.config(.8), delay: 6})
  TweenMax.from('.layout .town-back', 1.5,{css: {bottom: "-100%"},ease: Back.easeOut.config(.8), delay: 6.2});

  TweenMax.from('.layout .header', 2, {css: {top: "-100%"} ,delay:5.5});
  TweenMax.to('.reg', 2, {css: {opacity:1,visibility:"visible"} ,delay:7});
  // TweenMax.to('.modal', 0.8, {css: {opacity:1,visibility:"visible",transform:"scale(1)"},delay:7,onComplete:function(){
  //   $('.modal').addClass('active');
  //   TweenMax.to(".overlay", 0.4, {className:"+=active"});
  // }});

  star.to('.star-front',2,{opacity:1})
      .to('.star-mid',2,{opacity:1})
      .to('.star-back',2,{opacity:1});

  // Section
    var chkPop = 0;
    var name;

    $('.sec').click(function(e){
      e.stopPropagation();
      var section = $(this).data('sec');
      // console.log(section);

      name = ".pop-"+section;

      if(chkPop == 0){
        if($(name).hasClass('left'))
        {
          TweenMax.to($(name),1,{ left: "0%",delay: 0.2, ease:SlowMo.easeOut});
          $(name).addClass('active');
        }
        else if($(name).hasClass('right')){
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2, ease:SlowMo.easeIn});
        }else{
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2, ease:SlowMo.easeIn});
          TweenMax.to(".pop-where .image-wippo", 1,{css:{left: 0,opacity: 1}});
        }
        TweenMax.to(".overlay", 1, {className:"+=active"});
        TweenMax.to(name, 1, {className:"+=active",delay:.2});
        TweenMax.to("#scene", 2, {transform:"scale(1.4)"});

        chkPop++;
        
      }
    });

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
          $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');           

        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
          $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');           
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
           // Edge (IE 12+) => return version number
          $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');           
        }

        // other browser
        return false;
    }

    function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){   // If Internet Explorer, return version number
            console.log(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
            console.log('ie');
            $('head').append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');
            }
        else{                // If another browser, return 0
            console.log('otherbrowser');
        }
       return false;
    }

    function exit_modal(){
      if($('.modal').hasClass('active')){
        TweenMax.to('.modal', .8,{css:{transform:"scale(8)",opacity:0,visibility:"visible"},onComplete:function(){
          $('.modal').remove();
        }});
        TweenMax.to(".overlay", 0.8, {className:"-=active"});


      }
    }

    function exit_pop(){
      console.log(name +" "+ chkPop);
     if($(name).hasClass('active') && chkPop == 1){
        var item = name;
        console.log("item"+item);
        if($(item).hasClass('left')){
          TweenMax.to(item,1,{ left: "-100%",  ease:SlowMo.easeIn});
        }
        else if ($(item).hasClass('right'))
        {
          TweenMax.to(item,1,{ right: "-100%",  ease:SlowMo.easeIn});
        }else{
          TweenMax.to(item,1,{ right: "-100%",  ease:SlowMo.easeIn});
          TweenMax.to(".pop-where .image-wippo", 1,{css:{left: "-200%",opacity: 0}});
        }
        TweenMax.to(item, 1, {className:"-=active",delay:1});
        TweenMax.to(".overlay", 1, {className:"-=active"});
        TweenMax.to("#scene", 1, {transform:"scale(1)"})
        chkPop--;

        $('.loy-outer').removeClass('loyBig');
        $('.loy-outer').removeClass('delay');
        $('.inner-descript').removeClass('upText');
        $('#line').removeClass('when'); 
        name = "";
     }
    }

    $(' .overlay , .triangle , .exit').click(function(){
      exit_pop();
    });
    $(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        exit_pop();
        exit_modal();
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
      var randomPosX4;
      var randomPosX5;
      var randomPosX6;
      var changePosX;

      // change random to Position X of Starfall
      if($('body').width() <= 1500){
          randomPosX = Math.random()*1500-800;
          randomPosX2 = Math.random()*1500-800;
          randomPosX3 = Math.random()*1500-800;
          randomPosX4 = Math.random()*1500-1000;
          randomPosX5 = Math.random()*1500-1000;
          randomPosX6 = Math.random()*1500-1000;
          changePosX = 1000;
          
      }
      else if($('body').width() > 1500 && $('body').width() <= 2000){
          randomPosX = Math.random()*2000-1300;
          randomPosX2 = Math.random()*2500-1300;
          randomPosX3 = Math.random()*2500-1300;
          randomPosX4 = Math.random()*2500-1600;
          randomPosX5 = Math.random()*2500-1600;
          randomPosX6 = Math.random()*2500-1600;
          changePosX = 1100;
          
      }
      else if($('body').width() > 2000 && $('body').width() <= 2560){
          randomPosX = Math.random()*3700-1300;
          randomPosX2 = Math.random()*3700-1300;
          randomPosX3 = Math.random()*3700-1300;
          randomPosX4 = Math.random()*3700-1800;
          randomPosX5 = Math.random()*3700-1800;
          randomPosX6 = Math.random()*3700-1800;
          changePosX = 1600;
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

       var setExplosion4 = function(bomb,randomSpeed){
            setTimeout(function(){
            $(bomb).css({left: (randomPosX4+changePosX)});
            $(bomb).addClass('active');
            },randomSpeed);
            setTimeout(function(){
              $(bomb).removeClass('active');
              fall4('.ds-b1','.exp-b1');
            },2500);
      } 

      function fall4(el,bomb){     
        var randomSpeed = Math.random()*1.5+2;
        TweenMax.fromTo(el,randomSpeed,
          {css : {left: randomPosX4, top:"-30%"}},
          {css : {left: (randomPosX4+changePosX), top: "100%"},delay: 2.5,onComplete: function(){  
            setExplosion4(bomb,randomSpeed);
          }
          }); 
        }
      var setExplosion5 = function(bomb,randomSpeed){
            setTimeout(function(){
            $(bomb).css({left: (randomPosX5+changePosX)});
            $(bomb).addClass('active');
            },randomSpeed);
            setTimeout(function(){
              $(bomb).removeClass('active');
              fall5('.ds-b2','.exp-b2');
            },2500);
      } 

      function fall5(el,bomb){      
        var randomSpeed = Math.random()*1.5+1;   
        TweenMax.fromTo(el,randomSpeed,
          {css : {left: randomPosX5, top:"-30%"}},
          {css : {left: (randomPosX5+changePosX), top: "100%"},delay: 2.5,onComplete: function(){  
            setExplosion5(bomb,randomSpeed);
          }
          }); 
        }
      var setExplosion6 = function(bomb,randomSpeed){
            setTimeout(function(){
            $(bomb).css({left: (randomPosX6+changePosX)});
            $(bomb).addClass('active');
            },randomSpeed);
            setTimeout(function(){
              $(bomb).removeClass('active');
              fall6('.ds-b3','.exp-b3');
            },2500);
      } 

      function fall6(el,bomb){    
        var randomSpeed = Math.random()*1.5+0.5;     
        TweenMax.fromTo(el,randomSpeed,
          {css : {left: randomPosX6, top:"-30%"}},
          {css : {left: (randomPosX6+changePosX), top: "100%"},delay: 2.5,onComplete: function(){  
            setExplosion6(bomb,randomSpeed);
          }
          }); 
        } 
      
      setTimeout(function(){
        fall('.ds1','.exp1');
      },9007);

      setTimeout(function(){
        fall2('.ds2','.exp2');
      },9264);

      setTimeout(function(){
        fall3('.ds3','.exp3');
      },14305);

      setTimeout(function(){
        fall4('.ds-b1','.exp-b1');
      },7291);

      setTimeout(function(){
        fall5('.ds-b2','.exp-b2');
      },13238);

      setTimeout(function(){
        fall6('.ds-b3','.exp-b3');
      },8599);
});