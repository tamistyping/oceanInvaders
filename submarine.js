class  Sub {
    constructor(){
        this.width = 50
        this.height = 50
        this.x = canvas.width/2 - 18
        this.y = canvas.height - 40 - this.height
        this.moving = false
        this.frameX = 0
    }

    update(){
        if (keys[37] && this.x > 15){ //left
            this.x -= 7
            this.moving = true
            this.frameX = 1
        }
        if (keys[39] && this.x < canvas.width - this.width - 15){ //right
            this.x += 7
            this.moving = true
            this.frameX = 0
        }
    }
    draw(){
        ctx.drawImage(submarine, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}

const sub = new Sub()