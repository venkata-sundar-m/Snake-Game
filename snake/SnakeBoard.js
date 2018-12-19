class SnakeBoard {
    constructor(scale, frameRate) {
        //this.body = document.getElementsByTagName("BODY")[0];
        this.boardSize = new Point(50, 50);
        this.scale = scale;
        this.body = document.body;
        this.canvas = document.createElement("CANVAS");
        this.canvas.setAttribute("height", this.boardSize.y  * this.scale);
        this.canvas.setAttribute("width", this.boardSize.x * this.scale);
        this.body.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.snake = new Snake(this.boardSize.x, this.boardSize.y);
        this.food= new Food(this.boardSize.x, this.boardSize.y);
        this.frameRate = frameRate; //per second
        this.id = null;
        this.animate();
    }

    animate() {
    	let draw = this.draw.bind(this);
        let handler = this.moveHandler.bind(this);
    	document.addEventListener("keydown", handler);
        this.food.createFood();
        this.id= setInterval(draw, 1000/this.frameRate);
    
    }

    moveHandler(event) {
        let snake = this.snake; 
        if ( event.key === "ArrowUp"){
                snake.moveUp();
        } else  if ( event.key === "ArrowDown"){
                snake.moveDown();
        } else if ( event.key === "ArrowLeft"){
                snake.moveLeft();
        } else if ( event.key === "ArrowRight"){
                snake.moveRight();
        }
    }

    eatFood() {
        let tail = this.snake.tail, foodX = this.food.x, foodY = this.food.y;
        return tail.some(pt => (pt.x == foodX && pt.y == foodY));
    }

    draw() {
        let ctx = this.context,
            snake = this.snake,
            last = this.snake.tail.length-1;
        if(snake.isAlive()) { 
        	snake.move();
            if(this.eatFood()){
                snake.grow();
                this.food.createFood();
            }
        	ctx.beginPath();
        	ctx.strokeStyle="black";
            ctx.fillRect(snake.tail[last].x* this.scale ,snake.tail[last] .y * this.scale , this.scale,this.scale);
            ctx.clearRect(snake.tail[0].x * this.scale ,snake.tail[0].y * this.scale , this.scale,this.scale);
        	ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.fillRect(this.food.x * this.scale, this.food.y * this.scale, this.scale,this.scale);
            ctx.stroke();
        } else {
        	clearInterval(this.id);
        }
    }
}