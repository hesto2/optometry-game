	function timer(){
		count --;
		document.getElementById("count").innerHTML = count;
		if(count == 0){
			strikes++;
			displayStrikes(strikes);
			newGoal();
		}
	}
	
	//Make new squares (colored)
	function drawDistractions(){		
		color = 0;
		for(var i=0;i<(score*10);i++)
		{
			
			if(color > 9){
				color = 0;
			}
			//Assign a new random point to the square
			X=(Math.random()*10)*50;
			Y=(Math.random()*10)*50;
			var distractionBox = new distraction(X,Y);	
			
			distractions[i] = distractionBox;
			xD = distractions[i].xPos;
			yD = distractions[i].yPos;
			console.log("i:" +i);
			console.log("distractions[i].xpos:" +xD);
			console.log("color:"+color);
			console.log(" ");
			
			
			xD = check(xD);
			yD = check(yD);
			
			//Draw Square
			ctx.fillStyle = getColor(color);
			ctx.fillRect(xD,yD,xx,yy);			
			color++;
			
		}
	}
	
	function distraction(X,Y){
		this.xPos = X;
		this.yPos = Y
	}
	
	//Make new Goal
	function newGoal()
	{
		
		
		
		drawDistractions();
		
		count = 5;
		ctx.clearRect(goalX,goalY,xx,yy);
		goalX = Math.round(Math.random()*10)*50;
		goalY =  Math.round(Math.random()*10)*50;
		goalX=check(goalX);
		goalY=check(goalY);
		if(goalX == x && goalY == y){
			newGoal();
		}
		ctx.fillStyle='blue';
		ctx.fillRect(goalX,goalY,xx,yy);
		ctx.fillStyle='red';
		ctx.fillRect(x,y,xx,yy);
	
	}
	function getColor(color){
		switch(color){
			case 0:
				return 'aqua';
				break;
			case 1:
				return 'Maroon';
				break;
			case 2:
				return 'BlueViolet';
				break;
			case 3:
				return 'Yellow';
				break;
			case 4:
				return 'Orange';
				break;
			case 5:
				return 'aqua';
				break;
			case 6:
				return 'Chartreuse';
				break;
			case 7:
				return 'CornflowerBlue';
				break;
			case 8:
				return 'Magenta';
				break;
			case 9:
				return 'Indigo';
				break;
				
		}
	}
	function check(point){
		
			if(point <= 0)
			{
				point += 20;
				
			}
			if(point >= 500){
				point -= 20;
				
			}
			
		return point;
	}
	
	function displayStrikes(strikes){
		if(strikes ==1){
			document.getElementById("strikes").src="strike1.jpg";
		}
		if(strikes ==2){
			document.getElementById("strikes").src="strike2.jpg";
		}
		if(strikes ==3){
			document.getElementById("strikes").src="strike3.jpg";
			//fail code goes here!
			ctx.clearRect(100,100,296,175);
			ctx.drawImage(gameOver,100,100);
			alert("Play Again? Your Score was: " + score);
			location.reload();
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function move1(e){
		alert(e.keyCode);
	}
	
	function detectKeyDown(e){				
		if(e.keyCode == 87 || e.keyCode == 38){
			up = 1;
		}
		if(e.keyCode == 83 || e.keyCode == 40){
			down =1;
		}
		if(e.keyCode == 68 || e.keyCode == 39){
			right =1;
		}
		if(e.keyCode == 65 || e.keyCode == 37){
			left = 1;
		}
		
	
	}
	function move(){
		ctx.clearRect(x,y,xx,yy);
		
		if(up == 1){
			if( y > 0){
				y -= 10;
			}
		}
		
		if(down == 1){
			if(y+10 < 500){
				y += 10;
			}
		}
		
		if(right == 1){
			if(x+10<500){
				x=x+10;
			}
		}
		
		if(left == 1){
			if(x>0){
				x=x-10;
			}
		}
		xx = 10;
		yy = 10;
		ctx.fillRect(x,y,xx,yy);
		
		if((x == goalX) && (y == goalY)){			
			score++;	
			document.getElementById("score").innerHTML = score;
			newGoal();
		}
	
	}
	
	function detectKeyUp(e){				
		if(e.keyCode == 87 || e.keyCode == 38){
			up = 0;
		}
		if(e.keyCode == 83 || e.keyCode == 40){
			down = 0;
		}
		if(e.keyCode == 68 || e.keyCode == 39){
			right = 0;
		}
		if(e.keyCode == 65 || e.keyCode == 37){
			left = 0;
		}
		
	
	}