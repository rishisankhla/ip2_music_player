//displays and handles clicks on the playback button.
function PlaybackButton(){
	
	this.x = 650;
	this.y = 10;
	this.width = 30;
	this.height = 30;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.playing = false;
    //draw function
	this.draw = function(){
        if(!sw_itch)
        {
            if(this.playing)
            {
                text("<-- Hit button to pause", 700, 35);
                rect(this.x, this.y, this.width/2 - 2, this.height);
                rect(this.x + (this.width/2 + 2), this.y, this.width/2 - 2, this.height);
            }
            else
            {
                text("<--  Hit button to play", 700, 35);
                triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);

            }
        }
        else
        {
            this.playing=false;
        }
	};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
			if(!sw_itch)
            {
                if (sound.isPlaying()) {
                    sound.pause();
                } else {
                    sound.loop();
                }
                this.playing = !this.playing;
                return true;
            }
		}
			return false;
	};

}