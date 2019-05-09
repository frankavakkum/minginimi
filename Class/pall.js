class Pall {
    constructor(x, y, radius, color, speed = 2){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    update() {
        if(this.x + this.radius < tahvel.width) {
            this.x= this.x + 1; //this.x++;) 
        }
    }

    draw() {
        this.update();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}