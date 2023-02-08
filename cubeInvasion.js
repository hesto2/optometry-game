	var ctx = document.getElementById("ctx").getContext("2d");
	var playing = true;
	ctx.fillStyle = 'red';
	ctx.globalAlpha = 1;
	var x=250;	
	var y=250;
	var xx = 10;
	var yy = 10;
	var score = 0;
	var goalX =1000;
	var goalY =1000;
	var count=5;
	var set =0;
	var color =0 ;
	var strikes = 0;
	var up =0;
	var down =0;
	var left =0;
	var right =0;
	var keyDown = false;
	var distractions = new Array();
	var gameOver = new Image();
	gameOver.src="gameOver.jpg";
	ctx.fillRect(x,y,xx,yy);
	
	window.addEventListener( "keydown", detectKeyDown, false )
	window.addEventListener( "keyup", detectKeyUp, false )
	
	newGoal();
	
	setInterval(timer,1000);
	setInterval(move,50);
	if(playing != true){
		
	}
	
