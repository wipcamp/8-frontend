	$(document).ready(function(){

    $(window).on("resize",function(e){
      if($(window).width()<=500){
        alert("ย่อหาพ่อหรอมึงหรอครับ !");
      }
    });
    // console.log("window height : "+$( window ).height());
    console.log("%cตัวเอง.. ไม่เสือกดิ่","color:#f00;font-size:60px;font-weight:bold;font-family:\"Thaisans_lite\";");
    // Config
    $('.map').parallax();

    // Startup  
    TweenMax.from('.map .what',.8,{css: {left: "44%", top: "39%", opacity: 0}, delay:3});

    TweenMax.fromTo('.map .who',.5,
      {css: {left: "44%", top: "39%", opacity: 0}},
      {css:{left: "7%", top: "50%", opacity: 1}
      ,delay:3});

    TweenMax.fromTo('.map .when',1.2,
      {css: {left: "44%", top: "39%", opacity: 0}},
      {css:{left: "13%", top: "75%", opacity: 1}
      ,delay:3});

    TweenMax.fromTo('.map .faq',1,
      {css: {left: "44%", top: "39%", opacity: 0}},
      {css:{left: "70%", top: "24%", opacity: 1}
      ,delay:3});

    TweenMax.fromTo('.map .where',1.6,
      {css: {left: "44%", top: "39%", opacity: 0}},
      {css:{left: "76%", top: "50%", opacity: 1}
      ,delay:3});

    TweenMax.fromTo('.map .contact',1.8,
      {css: {left: "44%", top: "39%", opacity: 0}},
      {css:{left: "69%", top: "75%", opacity: 1}
      ,delay:3});

    TweenMax.fromTo('.map .description',1,
      {css: {opacity: 0, visibility: "hidden"}},
      {css:{opacity: 1, visibility: "visible"}
      ,delay:4});

    TweenMax.to('.layout .over-earth', 2, {css: {bottom:"-18em"} ,delay:3});
    TweenMax.to('.layout .over-logo', 2, {css: {top: "0"} ,delay:3});
    // TweenMax.to('.layout .spotlight', 4, {css: {opacity:1} ,delay:4.5});
    
    TweenMax.fromTo('.star-front', 3,{css: {opacity: 0, visibility: "hidden"}},
      {css:{opacity: 1, visibility: "visible"},delay:5});
    TweenMax.fromTo('.star-mid', 2,{css: {opacity: 0, visibility: "hidden"}},
      {css:{opacity: 1, visibility: "visible"},delay:6});
    TweenMax.fromTo('.star-back', 3,{css: {opacity: 0, visibility: "hidden"}},
      {css:{opacity: 1, visibility: "visible"},delay:7});
    TweenMax.fromTo('.star-end', 3,{css: {opacity: 0, visibility: "hidden"}},
      {css:{opacity: 1, visibility: "visible"},delay:8});
    TweenMax.fromTo('.reg', 3,{css: {opacity: 0, visibility: "hidden"}},
      {css:{opacity: 1, visibility: "visible"},delay:9});

    // Section
    var chkPop = 0;

    $('.sec').click(function(e){
      e.stopPropagation();
      var section = $(this).data('sec');
      console.log(section);

      var name = ".pop-"+section;

      if(chkPop == 0){
        if($(name).hasClass('left'))
        {
          // $(name).animate({ left: "0%" }, 100 , 'easeInOutQuint');

          // $(name).velocity({ left: "0%" }, "easeOutSlowMo");
          TweenMax.to($(name),1,{ left: "0%",delay: 0.2,  ease:SlowMo.easeOut});
          $(name).addClass('active');
        }
        else if($(name).hasClass('right')){
          // $(name).velocity({ right: "0%" }, "easeOutBounce");
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2,  ease:SlowMo.easeIn});
          $(name).addClass('active');
        }else{
          TweenMax.to($(name),1,{ right: "0%",delay: 0.2,  ease:SlowMo.easeIn});
          TweenMax.to(".pop-where .image-wippo", 1,{css:{left: 0,opacity: 1}});
          $(name).addClass('active');
        }
        // $('.overlay').addClass('active');
        TweenMax.to(".overlay", 1, {className:"+=active"});
        TweenMax.to(".map", 2, {transform:"scale(1.4)"});

        $('.loy-outer').removeClass('loyBig');
        $('.loy-outer').removeClass('delay');
        $('.inner-descript').removeClass('upText');
        $('#line').removeClass('when'); 
        
        chkPop++;
        
      }
    });

    $('.main-logo,.map,.overlay,.triangle,.exit').click(function(){
     if($('#popup .popup').find('.active') && chkPop == 1){
        var item = $('#popup').find('.active');
        if($(item).hasClass('left')){
          // item.animate({left: "-100%"},200);
          TweenMax.to(item,1,{ left: "-100%",  ease:SlowMo.easeIn});
          item.removeClass('active');
        }
        else if ($(item).hasClass('right'))
        {
          // item.animate({right: "-100%"},200);
          TweenMax.to(item,1,{ right: "-100%",  ease:SlowMo.easeIn});
          item.removeClass('active');
        }else{
          TweenMax.to(item,1,{ right: "-100%",  ease:SlowMo.easeIn});
          TweenMax.to(".pop-where .image-wippo", 1,{css:{left: "-200%",opacity: 0}});
          item.removeClass('active');
        }
        TweenMax.to(".overlay", 1, {className:"-=active"});
        TweenMax.to(".map", 1, {transform:"scale(1)"})
        chkPop--;
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
        $('.loy-outer.loy2').addClass('loyBig');
        $('.loy-outer').addClass('delay');
        $('#line').addClass('when');
        $('.inner-descript').addClass('upText');
      });

	});
