var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'poball', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('analog', 'assets/img/fusia.png');
    game.load.image('arrow', 'assets/img/longarrow2.png');
    game.load.image('ball', 'assets/img/pangball.png');
    game.load.image('wall', 'assets/img/wall.png');
    game.load.image('halfpipe', 'assets/img/halfpipe.png');
    game.load.image('halfpipemask', 'assets/img/halfpipemask.png');

}

var arrow;
var ball;
var halfpipe;
var walls = [];
var catchFlag = false;
var launchVelocity = 0;

function create() {
	
	loadLevel('level/level1.json')
	
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // set global gravity
    game.physics.arcade.gravity.y = 800;
    game.stage.backgroundColor = '#0072bc';
    
    var graphics = game.add.graphics(0,0);
    graphics.beginFill(0x049e0c);
    graphics.drawRect(395, 350, 10, 250);

    analog = game.add.sprite(400, 350, 'analog');

    game.physics.enable(analog, Phaser.Physics.ARCADE);

    analog.body.allowGravity = false;
    analog.width = 8;
    analog.rotation = 220;
    analog.alpha = 0;
    analog.anchor.setTo(0.5, 0.0);
    
    
    halfpipe = game.add.sprite(150, 150, 'halfpipe');
    
    game.physics.enable(halfpipe, Phaser.Physics.ARCADE);
    
    halfpipe.body.allowGravity = false;
    halfpipe.body.enable = true;
    halfpipe.body.immovable = true;
    halfpipe.x = 400;
    halfpipe.y = 450;

    
    arrow = game.add.sprite(400, 350, 'arrow');
    
    game.physics.enable(arrow, Phaser.Physics.ARCADE);

    arrow.anchor.setTo(0.1, 0.5);
    arrow.body.moves = false;
    arrow.body.allowGravity = false;
    arrow.alpha = 0;
    
    ball = game.add.sprite(100, 400, 'ball');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.anchor.setTo(0.5, 0.5);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(0.8, 0.8);
    
    // Enable input.
    ball.inputEnabled = true;
    ball.input.start(0, true);
    ball.events.onInputDown.add(set);
    ball.events.onInputUp.add(launch);

}

function loadLevel(level) {
	loadJSON(level,
		function(data) {
			data.walls.forEach(function(element, index) {
				console.log(element);
				
				height = 15
				width = (element.x2 - element.x1) * 50;
				console.log (width);
				walls[index] = game.add.sprite(width, height , 'wall');
			    
			    game.physics.enable(walls[index], Phaser.Physics.ARCADE);
			    
			    walls[index].body.allowGravity = false;
			    walls[index].body.enable = true;
			    walls[index].body.immovable = true;
			    walls[index].x = element.x1 * 50;
			    walls[index].y = element.y1 * 50;
				
			    console.log (walls[index]);
			})
		},
		function(error) {
			console.error(error);
		}
	);
}

function set(ball, pointer) {

    ball.body.moves = false;
    ball.body.velocity.setTo(0, 0);
    ball.body.allowGravity = false;
    catchFlag = true;

}

function launch() {

    catchFlag = false;
    
    ball.body.moves = true;
    arrow.alpha = 0;
    analog.alpha = 0;
    Xvector = (arrow.x - ball.x) * 3;
    Yvector = (arrow.y - ball.y) * 3;
    ball.body.allowGravity = true;  
    ball.body.velocity.setTo(Xvector, Yvector);

}

function update() {

	game.physics.arcade.collide(ball, walls);
	game.physics.arcade.collide(ball, halfpipe);
	
    arrow.rotation = game.physics.arcade.angleBetween(arrow, ball);
    
    if (catchFlag == true)
    {
        //  Track the ball sprite to the mouse  
        ball.x = game.input.activePointer.worldX;   
        ball.y = game.input.activePointer.worldY;
        
        arrow.alpha = 1;    
        analog.alpha = 0.5;
        analog.rotation = arrow.rotation - 3.14 / 2;
        analog.height = game.physics.arcade.distanceToPointer(arrow);  
        launchVelocity = analog.height;
    }   

}

function render() {

    game.debug.text("Drag the ball and release to launch", 32, 32);

    game.debug.bodyInfo(ball, 32, 64);

    // game.debug.spriteInfo(ball, 32, 64);
    // game.debug.text("Launch Velocity: " + parseInt(launchVelocity), 32, 250);

}

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
