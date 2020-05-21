

// function to initialize the game- called once
function init() {
	// get can canvas to update dynamically
	canvas = document.getElementById("bgCanvas");
	W = canvas.width=1000;
	H = canvas.height=600;
	game_over = false;

	// get a 2d context for the board
	pen = canvas.getContext('2d');

	rectangle = {
		x: 58,
		y: 68,
		height: 65,
		width: 65,
		speed: 30
	}
}

// function to draw the board after each update
function draw() {
	pen.clearRect(0, 0, W, H);
	pen.fillRect(rectangle.x, rectangle.y, rectangle.height, rectangle.width);
	
}


// function to update status of game
function update() {
	rectangle.x += rectangle.speed;
	if((rectangle.x < 0) || rectangle.x > (W - rectangle.width)) {
		rectangle.speed *= -1;	// make to move in reverse direction
	}
}

// function to handle the game loop
// and exit the game as soon as it is over
function gameloop() {
	if(game_over === true) {
		clearInterval(loop);
	}
	draw();
	update();
}


// function call to initialize a game
init()
// function call to a gameloop after every 100ms
var loop = setInterval(gameloop, 100);
