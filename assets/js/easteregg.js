//Easter Egg?
      var lock = 5;
      var key = 0;
      $(document).keydown(function(e){
        if(key == 0 && e.keyCode == 87){
          key++;
        }else if(key == 1 && e.keyCode == 73){
          key++;
        }else if(key == 2 && e.keyCode == 80){
          key++;
        }else if(key == 3 && e.keyCode == 80){
          key++;
        }else if(key == 4 && e.keyCode == 79){
          key++;
        }else{
          key = 0;
        }
          if(key == lock){
            TweenMax.to('.easter',1,{css:{opacity:1,visibility:"visible"}});
            $('.easter').addClass('fadeInRight animated');
          }

          setTimeout(function(){
            $('.easter .slogan').addClass('bounceIn animated');
          },3800);
          setTimeout(function(){
            $('.easter .easter_pic_center').addClass('fadeInUp animated');
          },1900);
          setTimeout(function(){
            $('.easter .easter_pic_linetwo').addClass('fadeInUp animated');
          },2200);
          setTimeout(function(){
            $('.easter .easter_pic_linethree').addClass('fadeInUp animated');
          },2500);
          setTimeout(function(){
            $('.easter .first').addClass('fadeInUp animated');
          },2800);
          setTimeout(function(){
            $('.easter .easter_pic_linefour').addClass('fadeInUp animated');
          },3100);
      });
