//constructor function to draw a circle-bar visualizer
function circlebar(){
	this.name = "circlebar";
    var li_color=[];
    var s_color=[random(0,255),random(0,255),random(0,255)];
    // main draw function
	this.draw = function(){
		push();
        
        var music_data=fourier.analyze();
		var energy = fourier.getEnergy("bass");
        translate(width/2,height/2);
        image(mu_image, -190, -190, 380, 380);
        var h3=map(circlebarzoom, 1, 20, 2, 65);
        var h4=map(circlebarzoom, 1, 20, 1, 32.6);
        if(frameCount%50==0)
        {
            li_color=[];
        }
        //loop to draw each bars 
        for(var i=0;i<music_data.length/h4;i++)
        {
            var r_co=random(0,255);
            var g_co=random(0,255);
            var b_co=random(0,255);
            //changing color combination
            if(frameCount%50==0)
            {
                fill([r_co,g_co,b_co]);
                s_color=[r_co,g_co,b_co];
                li_color.push(s_color);
                for(var k=1;k<25;k++)
                {
                    li_color.push([random(0,255),random(0,255),random(0,255)]);
                }
            }
            else
            {
                if(li_color.length==0)
                {
                    fill([random(0,255),random(0,255),random(0,255)]);
                }
                else
                {
                    fill(li_color[i]);
                }
            }
            //drawing each bars
            var p=((width/music_data.length)*circlebarzoom);
            var h2=map(music_data[i], 0, 255, 0, height);
            rect(-10, 200, p, 3+(h2*CircleBarHeight));
            rotate(PI/(music_data.length/h3));
        }     
		pop();
	};
}
