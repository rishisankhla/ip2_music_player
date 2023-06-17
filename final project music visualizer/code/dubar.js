//constructor function to draw a double sided bar visualizer
function dubar(){
	this.name = "dubar";
    // main draw function
	this.draw = function(){
		push();
        var music_data=fourier.analyze();
		var energy = fourier.getEnergy("bass");
        
        fill(barColor);
        //loop to draw each bars 
        for(var i=0;i<music_data.length;i++)
        {
            var p=((width/music_data.length)*barZoom);
            var h1 = -height + map(music_data[i], 0, 255, height, 0);
            var h2=map(music_data[i], 0, 255, 0, height);
            rect((i*p), height/2, p, 3+(h1*barHeight));
            rect((i*p),height/2,p,3+(h2*barHeight));   
        }     
		pop();
	};
}