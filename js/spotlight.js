      var canvas = document.getElementById('myCanvas');
      var light = canvas.getContext('2d');
			var spotlight = canvas.getContext('2d');
      var windowleft = 20;
      var windowtop = 20;
      // begin custom shape
      spotlight.beginPath();
			spotlight.moveTo(windowleft+75,windowtop+50);
      spotlight.lineTo(windowleft+0,windowtop+450);
			spotlight.bezierCurveTo(windowleft+0,windowtop+500,windowleft+200,windowtop+500,windowleft+200,windowtop+450);
      spotlight.lineTo(windowleft+125,windowtop+50);
      
      // complete custom shape
      spotlight.closePath();
      spotlight.lineWidth = 5;
      spotlight.fillStyle = '#ECE50D';
      spotlight.fill();
      
      light.beginPath();
      light.moveTo(windowtop+0,windowleft+450);
			light.bezierCurveTo(windowtop+0,windowleft+500,windowtop+200,windowleft+500,windowtop+200,windowleft+450);
      light.bezierCurveTo(windowtop+200,windowleft+425,windowtop+0,windowleft+425,windowtop+0,windowleft+450);
      
      light.closePath();
      light.fillStyle = '#49C1C3';
      light.fill();