import defaultBlock from './objects/defaultBlock';
import gameBall from './objects/gameBall';
import 'phaser';


export default class level extends Phaser.Scene {
	
	constructor () {
	    super({ key: 'level' })
		this.gameObjects;
	}
	
	getBlocks () {
		
	};
	
	preload() {
		
	    this.ball.preload();
	    this.blockPre.preload();
	};
	
	create() {
		
		this.ball.create();
		
		for (var j = 0; j < 4; j++) {
		    for (var i = 0; i < 8; i++) {
		    	//blocks[i + j*8] = this.game.physics.add.staticImage( j*100 + i*50, 100 + j*120, blockPre.sprite );
		    	blocks[i + j*8] = new dafaultBlock(this.game, this.ball);
		    	blocks[i + j*8].setPosition(j*100 + i*50 + 25, 100 + j*120);
		    	blocks[i + j*8].create();
		    }
		}
		
		/*
	    ball = this.game.physics.add.image( 25, 25, ballPre.sprite );
	    //ball.setCircle(25)
	    ball.setCollideWorldBounds(true);
	    ball.setBounce(1, 1)
	    ball.setVelocity(100);
		*/
	};
	
	update() {
		
	};
}