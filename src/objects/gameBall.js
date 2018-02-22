
export default function defaultBlock(game, x, y) {
	this.game = game;
	this.width = 50;
	this.height = 50;
	this.sprite = 'ball';
	this.image = 'assets/blocks/gameBall.png';
	this.x = x;
	this.y = y;
	this.gameObject;
	
	
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	this.preload = function() {
		this.game.load.image(this.sprite, this.image);
	}
	
	this.create = function() {
		this.gameObject = this.game.physics.add.image( 25, 25, this.sprite );
		
		this.gameObject.setCollideWorldBounds(true);
		this.gameObject.setBounce(1, 1)
	    this.gameObject.setVelocity(100);
	}
	
	this.update = function() {
		
	}
}