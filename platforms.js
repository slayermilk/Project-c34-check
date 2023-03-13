class Platform{
    constructor(x,y,width,height){

        let options = {
            isStatic: true
            
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body);
        this.image = loadImage('/Images/Platform.png')
        this.image.scale = 0.1

        this.x = x
        this.y = y
        this.width = width
        this.height = height


        
    }
    
    
    show(){
        let pos = this.body.position;

        // imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}