
export default function defaultBlock(game, x, y, ball) {
	this.game = game;
	this.width = 50;
	this.height = 50;
	this.x = x;
	this.y = y;
	this.sprite = 'block';
	this.image = 'assets/blocks/block.png';
	this.gameBall = ball;
	this.gameObject;
	
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	};
	
	this.preload = function() {
		this.game.load.image(this.sprite, this.image);
	};
	
	this.create = function() {
		this.gameObject = this.game.physics.add.staticImage(this.x, this.y, this.sprite);
	};
	
	this.update = function() {
		console.log (this.gameBall);
		this.game.physics.world.collide(this.gameBall.gameObject, this.gameObject);
	};
}