import 'phaser';
import defaultBlock from './defaultBlock';
import gameBall from './gameBall';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
	    physics: {
	    default: 'arcade',
	    arcade: {
	        debug: true,
	        gravity: { y: 100 }
	    }
	},
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var blockPre = new defaultBlock();
var ballPre = new gameBall();
var blocks = [];
var ball;

function preload ()
{
    this.load.image(blockPre.sprite, blockPre.image);
    this.load.image(ballPre.sprite, ballPre.image);
}

function create ()
{
	
	for (var j = 0; j < 4; j++) {
	    for (var i = 0; i < 8; i++) {
	    	blocks[i + j*8] = this.physics.add.staticImage( j*100 + i*50, 100 + j*120, blockPre.sprite );
	    }
	}
	
	
    ball = this.physics.add.image( 25, 25, ballPre.sprite );
    //ball.setCircle(25)
    ball.setCollideWorldBounds(true);
    ball.setBounce(1, 1)
    ball.setVelocity(100);
}

function update () {
	this.physics.world.collide(ball, blocks);
}
