class Snake {
    constructor(constrainX, constrainY) {
        this.x = 5;
        this.y = 5;
        this.xspeed = 1;
        this.yspeed = 0;
        this.tail = new Array();
        this.total = 1;
        this.alive = true;
        this.constrainX = constrainX;
        this.constrainY = constrainY;
        this.tail.push(new Point(this.x,this.y));
        this.tail.push(new Point(this.x,this.y));
    }

    move() {
    	let len = this.tail.length, tail = this.tail, i = 0;
    	this.x += this.xspeed;
    	this.y += this.yspeed;
    	if(this.x == this.constrainX || this.y == this.constrainY || this.x == 0 || this.y == 0) {
    		this.alive = false;

    	}  	
    	for(i = 0; i <len-1;i++){
    		tail[i]=tail[i+1];
    	}
    	let newPt = new Point(this.x, this.y)
    	if(this.alive) this.alive = !tail.some(pt => (pt.x == newPt.x && pt.y == newPt.y));
    	tail[i] = newPt;
    }

    grow() {
    	let tail = this.tail;
    	tail.push(tail[tail.length-1]);

    }

    moveLeft() {
    	this.xspeed = -1;
    	this.yspeed = 0;
    }
    moveRight() {
    	this.xspeed = 1;
    	this.yspeed = 0;
    }
    moveUp() {
    	this.yspeed = -1;
    	this.xspeed = 0;
    }
    moveDown() {
    	this.yspeed = 1;
    	this.xspeed = 0;
    }

    isAlive() {
    	return this.alive;
    }

}
