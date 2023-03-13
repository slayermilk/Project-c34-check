class Ball{
    constructor(x,y,width,height) {
        this.x = x,
        this.y = y,
        this.width = width,
        this.height = height,
        this.image = loadImage("Images/ball.png")
        
    }

    show() {
        let pos = this.body.position
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }


    
}