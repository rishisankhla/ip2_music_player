//constructor function to create Spectrum
function Spectrum(){
	this.name = "spectrum";
    // main draw function for Spectrum constructor
	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		//loop to draw each lines
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, height);
		    var h = map(spectrum[i], 0, 255, 0, width);
		    fill(spectrum[i],map(spectrum[i],0,255,255,0),0);
            rect(0,x,h,height / spectrum.length);
  		}
		pop();
	};
}
