//constructor function to create rotating circles and lines.
function circleline(){
	this.name = "circleline";
    var rot=0;
    //function to create rotating circles 
    function circl(music_data,energy)
    {
        push();
        fill(255,0,energy);
        translate(width / 2, height / 2);
        if(energy<rotateThresh)
        {
            rot += 0.01;
        }
        if(sound.isPlaying())
        {
            rotate(rot);
        }
        for(var i=0;i<8;i++)
        {
            ellipse(-520+(i*150), -26, 30+(energy*0.5)); 
        }
        pop(); 
    }
    //function to create changing lines
    function lin(energy,energy2)
    {
	push();
	translate(width/2, height/2);
	beginShape();
	noFill();
	stroke(lineColor);
	strokeWeight(3);
	for(var i=0;i<100;i++)
	{
		var x = map(noise(i*noiseStep+prog),0,1,-450,450);
		var y = map(noise(i*noiseStep+prog+1000),0,1,-450,450);
		vertex(x,y);
	}
	endShape();
	if(energy > progThresh)
	{
		prog += 0.1;
	}
    if(energy2 > seedThresh)
    {
        noiseSeed();
    }
	pop();
}
    //main draw function
	this.draw = function(){
		push();
        var music_data=fourier.analyze();
		var energy = fourier.getEnergy("bass");
        var treble = fourier.getEnergy("treble");
        circl(music_data,treble); 
        lin(energy,treble);
		pop();
	};
}