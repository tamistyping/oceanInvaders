class Bullet {
    constructor(){
        this.width = 50
        this.height = 50
        this.speed = 5
        this.fired = false
    }

    fire(sub){
        this.x = sub.x + 10
        this.y = sub.y - 23
        this.fired = true
    }

    update(){
        if (this.fired){
            this.y -= this.speed
        }
    }

    draw(){
        if (this.fired){
            ctx.drawImage(missile, this.x, this.y, this.width/1.5, this.height/1.5)
        }
    }
}
