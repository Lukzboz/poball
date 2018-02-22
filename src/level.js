import defaultBlock from './objects/defaultBlock';
import gameBall from './objects/gameBall';
import 'phaser';

var objects = {}
objects.gameBall = gameBall;
objects.defaultBlock = defaultBlock;

export default class level extends Phaser.Scene {
	
	constructor () {
	    super({ key: 'level' })
		this.items = [];
	    this.gameball;
	    this.gameConfig;
	    this.getBlocks();
	}
	
	getBlocks () {
		this.gameConfig = [
		    { type: 'gameBall', x: 0, y: 1 },
		    { type: 'defaultBlock', x: 0, y: 2 },
		    { type: 'defaultBlock', x: 1, y: 2 },
		    { type: 'defaultBlock', x: 2, y: 2 },
		    { type: 'defaultBlock', x: 3, y: 2 },
		    { type: 'defaultBlock', x: 4, y: 2 },
		    { type: 'defaultBlock', x: 5, y: 2 },
		    { type: 'defaultBlock', x: 6, y: 2 },
		    { type: 'defaultBlock', x: 7, y: 2 },
		    { type: 'defaultBlock', x: 1, y: 4 },
		    { type: 'defaultBlock', x: 2, y: 4 },
		    { type: 'defaultBlock', x: 3, y: 4 },
		    { type: 'defaultBlock', x: 4, y: 4 },
		    { type: 'defaultBlock', x: 5, y: 4 },
		    { type: 'defaultBlock', x: 6, y: 4 },
		    { type: 'defaultBlock', x: 7, y: 4 },
		    { type: 'defaultBlock', x: 8, y: 4 },
		    { type: 'defaultBlock', x: 2, y: 6 },
		    { type: 'defaultBlock', x: 3, y: 6 },
		    { type: 'defaultBlock', x: 4, y: 6 },
		    { type: 'defaultBlock', x: 5, y: 6 },
		    { type: 'defaultBlock', x: 6, y: 6 },
		    { type: 'defaultBlock', x: 7, y: 6 },
		    { type: 'defaultBlock', x: 8, y: 6 },
		    { type: 'defaultBlock', x: 9, y: 6 },
		    { type: 'defaultBlock', x: 3, y: 8 },
		    { type: 'defaultBlock', x: 4, y: 8 },
		    { type: 'defaultBlock', x: 5, y: 8 },
		    { type: 'defaultBlock', x: 6, y: 8 },
		    { type: 'defaultBlock', x: 7, y: 8 },
		    { type: 'defaultBlock', x: 8, y: 8 },
		    { type: 'defaultBlock', x: 9, y: 8 },
		    { type: 'defaultBlock', x: 10, y: 8 },
		];
		
		this.gameConfig.forEach(function(val) {
			if (val.type == 'gameBall') {
				this.gameBall = new objects.gameBall(this, val.x * 50 + 25, val.y * 50 + 25);
				this.items.push(this.gameBall);
			}
			else {
				this.items.push(new objects[val.type](this, val.x * 50 + 25, val.y * 50 + 25, this.gameBall));
			}
		}, this);
	};
	
	preload() {
		
	    this.items.forEach(function(val) {
	    	val.preload();
	    });
	};
	
	create() {
		
	    this.items.forEach(function(val) {
	    	val.create();
	    });
		/*
		this.ball.create();
		
		for (var j = 0; j < 4; j++) {
		    for (var i = 0; i < 8; i++) {
		    	//blocks[i + j*8] = this.game.physics.add.staticImage( j*100 + i*50, 100 + j*120, blockPre.sprite );
		    	blocks[i + j*8] = new dafaultBlock(this.game, this.ball);
		    	blocks[i + j*8].setPosition(j*100 + i*50 + 25, 100 + j*120);
		    	blocks[i + j*8].create();
		    }
		}
		*/
		/*
	    ball = this.game.physics.add.image( 25, 25, ballPre.sprite );
	    //ball.setCircle(25)
	    ball.setCollideWorldBounds(true);
	    ball.setBounce(1, 1)
	    ball.setVelocity(100);
		*/
	};
	
	update() {
	    this.items.forEach(function(val) {
	    	val.update();
	    });
	};
}