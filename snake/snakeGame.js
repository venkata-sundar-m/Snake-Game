"use strict";
function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}


class Food {
	constructor(maxX,maxY) {
		this.maxX = maxX;
		this.maxY = maxY;
		this.x=-1;
		this.y=-1;		
	}

	createFood() {
		this.x = Math.ceil(Math.random()* this.maxX);
		this.y = Math.ceil(Math.random()* this.maxY);
	}
}

(function() {
    ready(function() {
        let s = new SnakeBoard(5,10);

       // s.draw();
    });
})();