       $(document).ready( function(){
            var spot = document.getElementById('spotlight');

            var heightwindow = $(document).height();
            var widthwindow = $(document).width();
            var width =(($(".earth").width()/4)*2) ;
            var height = (heightwindow) ;
            
            $('#spotlight').css('width',width+'px');
            $('#spotlight').css('height',height+'px');

            var left = (widthwindow/2-width/2);
            var top = 0;
            $('#spotlight').css('left',left+'px');
            $('#spotlight').css('top',top+'px');

            var light = spot.getContext('2d');
            var spotlight = spot.getContext('2d');

            var lleft = width/2;
            var ltop = 0;
            var earthheight = $(".earth").height();

            console.log("doc width = "+(ltop+(height)));
            console.log("doc width = "+(($(".earth").width()/4)*2));
            console.log("doc width = "+width/2);

            spotlight.beginPath();
            spotlight.moveTo(lleft,ltop);
            spotlight.lineTo(0,0);
            //spotlight.bezierCurveTo(windowleft+0,windowtop+500,windowleft+200,windowtop+500,windowleft+200,windowtop+450);
            //spotlight.lineTo(windowleft+125,windowtop+50);


            //spotlight.closePath();
            spotlight.lineWidth = 5;
            spotlight.fillStyle = '#ECE50D';
            spotlight.stroke();
            spotlight.fill();

            // light.beginPath();
            // light.moveTo(windowtop+0,windowleft+450);
            // light.bezierCurveTo(windowtop+0,windowleft+500,windowtop+200,windowleft+500,windowtop+200,windowleft+450);
            // light.bezierCurveTo(windowtop+200,windowleft+425,windowtop+0,windowleft+425,windowtop+0,windowleft+450);

            // light.closePath();
            // light.fillStyle = '#49C1C3';
            // light.fill();
      });