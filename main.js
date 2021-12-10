
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
player_x = 0;
player_y = 0;
player_x = 800;
player_y = 400;


block_image_width = 5;
block_image_height = 5;

	// write code to Upload golf image on the canvas
	function load_image()
{
    fabric.Image.fromURL("golf-h.png", function(Img) {
    hole_object = Img;

    hole_object.scaleToWidth(50);
    hole_object.scaleToHeight(50);
    hole_object.set({
    top:hole_y,
    left:hole_x
    });
    canvas.add(hole_object);

    });
	new_image();
}


function new_image()
{
    fabric.Image.fromURL("ball.png", function(Img) {
		ball_object = Img;

    ball_object.scaleToWidth(50);
    ball_object.scaleToHeight(50);
    ball_object.set({
    top:ball_y,
    left:ballx
    });
    canvas.add(ball_object);

    });
	
}
if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_object);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getElementById("hd3").innerHTML="You have hit the goal !!!"; 
	document.getElementById("myCanvas").style.borderColor="red"; 
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(player_y >=0)
		{
			player_y = player_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
			canvas.remove(player_object);
			player_update();
		}
	}
	
	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}
	
	function left()
	{
		if(ball_x >0)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(player_object);
			new_image();
		}
	}
	
	function right()
	{
		if(ball_x <=850)
		{
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(player_object);
			new_image();
		}
	}
	
	
	

