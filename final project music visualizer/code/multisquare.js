//constructor function to draw rotating blast square with piano visualizer
//inspired from https://editor.p5js.org/mrbombmusic/sketches/B1gG3goAQ
function multisquare(){
	this.name = "multisquare";
    var x_match=700;
    var y_match=500;
    //function to remove values from array
    function removeparticular(arr, value) 
    {
        var index = arr.indexOf(value);
        arr.splice(index, 1);
        return arr;
    }
    //the draw loop function which is called inside finaldraw()
    function drawloop()
    {
        for(var i=0;i<con_list.length;i++)
        {
            con_list[i].draw();
            con_list[i].mo_speed+=sqDisSpeed;
            if(con_list[i].mo_speed>windowWidth)
            {
                removeparticular(con_list, con_list[i]);
            }
        }
    }
    //the final draw function which is called indise our main draw() function
    function finaldraw()
    {
        drawloop();  
        push();
        fill(255);
        textSize(30);
        text("This visualizer work's with piano, please press piano keys on keyboard",700,55);
        fill(255,255,0);
        rect(x_match-5,y_match-5,520,305+5);
        pop();
        //drawing each piano key
        for(var i=0;i<piano.length;i++)
        {
            if(i<10)
            {
                if(piano[i].state==false)
                {
                    piano[i].draw(255,i)
                }
                else
                {
                    piano[i].draw([255,0,0],i)
                }
            }
            else
            {
                if(piano[i].state==false)
                {
                    piano[i].draw(0,i)
                }
                else
                {
                    piano[i].draw([255,0,0],i)
                }
            } 
        }
        push();
        fill(255,0,255);
        textSize(20);
        stroke(0, 0, 255);
        strokeWeight(2);
        text("A",x_match+(15*1)+2  ,y_match+240);
        text("S",x_match+(15*5)-5  ,y_match+240);
        text("D",x_match+(15*9)-14 ,y_match+240);
        text("F",x_match+(15*13)-23,y_match+240);
        text("G",x_match+(15*17)-32,y_match+240);
        text("H",x_match+(15*21)-41,y_match+240);
        text("J",x_match+(15*25)-50,y_match+240);
        text("K",x_match+(15*29)-59,y_match+240);
        text("L",x_match+(15*33)-68,y_match+240);
        text(";",x_match+(15*37)-77,y_match+240);
        text("W",x_match+(42*1)    ,y_match+120);
        text("E",x_match+(42*2)+10 ,y_match+120);
        text("T",x_match+(42*4)+30 ,y_match+120);
        text("Y",x_match+(42*5)+38 ,y_match+120);
        text("U",x_match+(42*6)+46 ,y_match+120);
        text("O",x_match+(42*8)+64 ,y_match+120);
        text("P",x_match+(42*9)+75 ,y_match+120);
        pop();
    }
    // main draw function
	this.draw = function()
    {
		push();
        finaldraw();
		pop();
	};
}

//single blast rotating square object's constructor function means here 
//we have created constructor function of it so that we can call 
//it as many time we need to create blast objects.
function sq_object_constructor()
{
    var r=0;
    this.mo_speed=20;
    //function to draw single square
    function dr_sin_ro_rect(x,y,s1,s2,mycolor)
    {
        push();
        fill(mycolor);
        translate(x,y);
        rectMode(CENTER);
        rotate(r);
        r=r+sqRotSpeed;
        rect(0,0,s1,s2);
        pop();
    }
    var x1=random(0, width);
    var y1=random(0,height);
    var r_color = random(0,255); // random colour number between 0 - 255
    var g_color = random(0,255); 
    var b_color = random(0,255);
    var size_1=random(5,45);
    //function to draw all 8 suqares of single blast 
    this.draw = function()
    {
        push();
        translate(x1,y1);
        for(var i=0;i<8;i++)
        {
            rotate((2*PI)/8);
            dr_sin_ro_rect(0,this.mo_speed,size_1,size_1,[r_color,g_color,b_color]);
        }
        pop();
    }
}

//constructor function to create object of each piano key 
function my_piano_sound()
{
    this.state= false;
    this.x=700;
    this.y=500;
    var set=50/3;
    //function to draw piano key according to the input parameter(i.e key number)
    this.draw = function(need_col,i)
    {
        if(i<10)
        {
            fill(need_col);
            rect(this.x+(i*51),this.y,50,300);
        }
        else if(i==10)
        {
            fill(need_col);
            rect(this.x+(set*2),this.y,set*2,150);
        }
        else if(i==11)
        {
            fill(need_col);
            rect(this.x+(set*5),this.y,set*2,150);
        }
        else if(i==12)
        {
            fill(need_col);
            rect(3+this.x+(set*11),this.y,set*2,150);
        }
        else if(i==13)
        {
            fill(need_col);
            rect(4+this.x+(set*14),this.y,set*2,150);
        }
        else if(i==14)
        {
            fill(need_col);
            rect(5+this.x+(set*17),this.y,set*2,150);
        }
        else if(i==15)
        {
            fill(need_col);
            rect(7+this.x+(set*23),this.y,set*2,150);
        }
        else if(i==16)
        {
            fill(need_col);
            rect(8+this.x+(set*26),this.y,set*2,150);
        }
    }
}
