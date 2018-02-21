import 'phaser';
import defaultBlock from './defaultBlock';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var blockPre = new defaultBlock();


function preload ()
{
    this.load.image(blockPre.sprite, blockPre.image);
}

function create ()
{
	var blocks = [];
	for (var j = 0; j < 4; j++) {
	    for (var i = 0; i < 8; i++) {
	    	console.log(i);
	    	blocks[i] = this.add.image( j*100 + i*50, 100 + j*100, blockPre.sprite );
	    }
	}
    //this.add.image( 50, 100, blockPre.sprite );
    
}
