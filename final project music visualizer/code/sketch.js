//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;
// variable for GUIs 
var gui;
var noiseStep;
var prog;
var rotateThresh;
var progThresh;
var seedThresh;
var barHeight;
var barZoom;
var barColor;
var lineColor;
var sqRotSpeed;
var sqDisSpeed;
var sqIntence;
// variable for piano
var sw_itch;
var osc = [];
var envo = [];
var con_list=[];
var piano=[];
// variable for GUIs
var circlebarzoom;
var CircleBarHeight;
// variable for image
var mu_image;

function preload(){
	sound = loadSound('assets/stomper_reggae_bit.mp3');
    mu_image = loadImage('assets/musicimage.png');
    noiseStep=0.01;
    prog=0;
    progThresh=180;
    rotateThresh=46;
    seedThresh=100;
    barZoom=1;
    circlebarzoom=7;
    barHeight=0.3;
    CircleBarHeight=0.3;
    barColor = [255,255,0];
    lineColor = [0,0,255];
    sqRotSpeed=0.009;
    sqDisSpeed=6;
    sqIntence=2;
    sw_itch=false;
    
    // adding sounds to array for piano
    for (var j = 0; j < 17; j++) 
    {
        envo.push(new p5.Env());
        envo[j].setADSR(0.1, 0.5, 1, 0.1);
        envo[j].setRange(1, 0);
        osc.push(new p5.Oscillator());
        osc[j].amp(envo[j]);
    }
    
    // adding each piano key to final array to draw in future
    for(var i=0;i<17;i++)
    {
        piano.push(new my_piano_sound());
    }
  
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    controls = new ControlsAndInput();

    //instantiate the fft object
    fourier = new p5.FFT();

    //create a new visualisation container and add visualisations
    vis = new Visualisations();
    vis.add(new Spectrum());
    vis.add(new WavePattern());
    vis.add(new Needles());
    vis.add(new dubar());
    vis.add(new circleline());
    vis.add(new multisquare());
    vis.add(new circlebar());
    
    // to create GUI  
    gui = createGui('Audio Visualizer');
    
    sliderRange(0.001,1,0.001);
    gui.addGlobals('noiseStep');
    sliderRange(0,255,1);
    gui.addGlobals('rotateThresh');
    gui.addGlobals('progThresh');
    gui.addGlobals('seedThresh');
    sliderRange(0,1,0.01);
    gui.addGlobals('barHeight');
    sliderRange(1,5,0.1);
    gui.addGlobals('barZoom');
    gui.addGlobals('barColor');
    gui.addGlobals('lineColor');
    sliderRange(0.009,0.05,0.001);
    gui.addGlobals('sqRotSpeed');
    sliderRange(5,20,0.1);
    gui.addGlobals('sqDisSpeed');
    sliderRange(1,10,1);
    gui.addGlobals('sqIntence');
    sliderRange(1,8.2,0.1);
    gui.addGlobals('circlebarzoom');
    sliderRange(0.05,1,0.01);
    gui.addGlobals('CircleBarHeight');

}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
}

// mouse press function 
function mouseClicked()
{
	controls.mousePressed();
}

// key press function
function keyPressed()
{
	controls.keyPressed(keyCode);
    
    //checking the keycode if key is pressed (only if piano visualizer is on) 
    if(sw_itch)
    {
        var root = 60;
        if (keyCode === 65) 
        {
        piano[0].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[0].start();
        osc[0].freq(midiToFreq(root));
        envo[0].play();
        } 
        else if (keyCode === 87) 
        {
        piano[10].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[1].start();
        osc[1].freq(midiToFreq(root + 1));
        envo[1].play();
        } 
        else if (keyCode === 83) 
        {
        piano[1].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[2].start();
        osc[2].freq(midiToFreq(root + 2));
        envo[2].play();
        } 
        else if (keyCode === 69) 
        {
        piano[11].state=true;  
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[3].start();
        osc[3].freq(midiToFreq(root + 3));
        envo[3].play();
        } 
        else if (keyCode === 68) 
        {
        piano[2].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[4].start();
        osc[4].freq(midiToFreq(root + 4));
        envo[4].play();
        } 
        else if (keyCode === 70) 
        {
        piano[3].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[5].start();
        osc[5].freq(midiToFreq(root + 5));
        envo[5].play();
        } 
        else if (keyCode === 84) 
        {
        piano[12].state=true;   
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[6].start();
        osc[6].freq(midiToFreq(root + 6));
        envo[6].play();
        } 
        else if (keyCode === 71) 
        {
        piano[4].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[7].start();
        osc[7].freq(midiToFreq(root + 7));
        envo[7].play();
        } 
        else if (keyCode === 89) 
        {
        piano[13].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[8].start();
        osc[8].freq(midiToFreq(root + 8));
        envo[8].play();
        } 
        else if (keyCode === 72) 
        {
        piano[5].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[9].start();
        osc[9].freq(midiToFreq(root + 9));
        envo[9].play();
        } 
        else if (keyCode === 85) 
        {
        piano[14].state=true;  
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[10].start();
        osc[10].freq(midiToFreq(root + 10));
        envo[10].play();
        } 
        else if (keyCode === 74) 
        {
        piano[6].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[11].start();
        osc[11].freq(midiToFreq(root + 11));
        envo[11].play();
        } 
        else if (keyCode === 75) 
        {
        piano[7].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[12].start();
        osc[12].freq(midiToFreq(root + 12));
        envo[12].play();
        } 
        else if (keyCode === 79) 
        {
        piano[15].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[13].start();
        osc[13].freq(midiToFreq(root + 13));
        envo[13].play();
        } 
        else if (keyCode === 76) 
        {
        piano[8].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[14].start();
        osc[14].freq(midiToFreq(root + 14));
        envo[14].play();
        } 
        else if (keyCode === 80) 
        {
        piano[16].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[15].start();
        osc[15].freq(midiToFreq(root + 15));
        envo[15].play();
        } 
        else if (keyCode === 186) 
        {
        piano[9].state=true;
        for(var i=1;i<=sqIntence;i++)
        {
            con_list.push(new sq_object_constructor());
        }
        osc[16].start();
        osc[16].freq(midiToFreq(root + 16));
        envo[16].play();
        }
    }
}

//key realease function is used to change to color of piano key if key is released
function keyReleased()
{
    for(var i=0;i<piano.length;i++)
    {
        piano[i].state=false;
    }
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
