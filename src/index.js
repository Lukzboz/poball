import 'phaser';
import level from './level';

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
    scene: [
        level
    ]
};

var game = new Phaser.Game(config);

console.log (game);