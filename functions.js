	var changed = 0;  
	var meridian;  
	var w = 0;
	function reload(){
		document.getElementById("game_script").src='';
		document.getElementById("game_script").src='cubeInvasion.js';
	}
	function killGame(){
		document.getElementById("game_script").src='';
	}
 function change(){
		if(changed == 1){
		console.log("Change Back Clicked");
		changeBack();
		}
		else{
			document.getElementById("content").innerHTML="Sup";
		    changed = 1;
			console.log(changed);
		}
     }	
	function changeBack(){
	     document.getElementById("content").innerHTML="I have changed again!";
		 changed = 0;
	}
    function backgroundRed(){
	document.getElementById("html").style.background="linear-gradient(orange,red)";
	}
	function backgroundBlue(){
	document.getElementById("html").style.background="linear-gradient(cyan,blue)";
	}
	function setBackgroundTime(){
		var date = new Date();
		var hours = date.getHours();
		if(hours < 12){
			backgroundBlue();			
		}
		else if(hours >= 12){
		    
			backgroundRed();
		}
	}
	function getCurrentTime(){
	     var currentTime = new Date();
		 var hours = currentTime.getHours();
		 var minutes = currentTime.getMinutes();
		 if (minutes < 10){
		     minutes = "0" + minutes;
		 }
		 if(w == 0){
		     colon =":";
			 w=1;
		 }
		 else{
		     colon =" ";
			 w=0;
		 }
		 if (hours < 12){
			meridian = " AM";
		 }
		 else if (hours >= 12){
			meridian =" PM";
			if(hours >12){
				hours = hours - 12;
			}
		 }
			
			time =(hours  + colon + minutes + meridian);
		
            document.getElementById("time_stamp").innerHTML = time;			
	}
