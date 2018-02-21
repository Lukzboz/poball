
export default function defaultBlock(game) {
	this.game = game;
	this.width = 50;
	this.height = 50;
	this.x;
	this.y;
	this.sprite = 'block';
	this.image = 'assets/blocks/block.png';
	
	
	function preload() {
		this.game.load.image(this.sprite, this.image);
	}
	
	function create() {
		
	}
	
	function update() {
		
	}
}