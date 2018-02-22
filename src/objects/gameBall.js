
export default function defaultBlock(game) {
	this.game = game;
	this.width = 50;
	this.height = 50;
	this.sprite = 'ball';
	this.image = 'assets/blocks/gameBall.png';
	this.x;
	this.y;
	this.gameObject;
	console.log(this.game);
	
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	this.preload = function() {
		console.log (this.game);
		this.game.load.image(this.sprite, this.image);
	}
	
	this.create = function() {
		this.gameObject = this.game.physics.add.image( 25, 25, ballPre.sprite );
		
		this.gameObject.setCollideWorldBounds(true);
		this.gameObject.setBounce(1, 1)
	    this.gameObject.setVelocity(100);
	}
	
	this.update = function() {
		
	}
}