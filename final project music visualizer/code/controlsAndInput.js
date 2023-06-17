//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;
	
	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		if(!this.playbackButton.hitCheck())
        {
//            fullscreen(!fullscreen());
            //comented out code so that we can stop resizing screen to fullscreen so that we can use GUI properly
        }
		//check if the playback button has been clicked
		//if not make the visualisation fullscreen
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
//		console.log(keycode);
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
            if(keycode==54)
            {
                sw_itch=true;
                sound.pause();
                
            }
            else
            {
                sw_itch=false;
                
               
            }
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button 
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 300, 30);
			this.menu();
		}
        else
        {
            text("Press space for menu", 300, 30);
        }
		pop();

	};

	this.menu = function(){
        var xc=1;
		//draw out menu items for each visualisation
		for(let i = 0; i < vis.visuals.length; i++)
		{
			text(xc+": "+vis.visuals[i].name, 300, 70+(i*40));
            xc+=1; 
		}
	};
}


