class Enemies{
    constructor(x){
        this.width = 50
        this.height = 50
        this.x = x
        this.y = 20
        this.directionX = 1
        this.directionY = 0
        this.speed = 1
        this.alive = true
    }
 
    update(){
        this.x += this.directionX * this.speed
        if (this.x > canvas.width - this.width - 15){
            this.directionX = -1
            this.y += 50
        }
        if (this.x < 15){
            this.directionX = 1
            this.y += 50
        }
        this.dropBomb()
    }
    
    dropBomb(){
        if(Math.random()<0.005) {
            const bomb = new Bomb(this.x + this.width/2, this.y + this.height)
            bombsArr.push(bomb)
        }
    }

    draw(){
        if (this.alive === true){
        ctx.drawImage(groupEnemies, this.x, this.y, this.width, this.height)
        }
    }
}

let enemiesArr = []
function initializeEnemies(){
    numberOfEnemies = 6

    for (let i=0; i < numberOfEnemies; i++){
        const enemy = new Enemies(i * 70 + 20)
        enemiesArr.push(enemy)
    }      
}
initializeEnemies()

function checkIfAlive(){
    bulletsArr.forEach((bullet, bulletIndex) => {
        enemiesArr.forEach((enemy, enemyIndex) => {
            if (
                bullet.y <= enemy.y + enemy.height &&
                bullet.y >= enemy.y &&
                bullet.x >= enemy.x &&
                bullet.x <= enemy.x + enemy.width
            ){
                enemy.alive = false
                bulletsArr.splice(bulletIndex, 1)

                if (!enemy.alive) {
                    enemiesArr.splice(enemyIndex, 1)
                    score += 10
                }
            }
        })
    })
    if (enemiesArr.length === 0){
        console.log('sss')
        resetGame()
    }}

function resetGame(){
    bombsArr = []
    enemiesArr = []
    bulletsArr = []

    initializeEnemies()
    score = 0
    gameState = "start"
}

function checkBombCollision(){
    bombsArr.forEach((bomb)=> {
        if(
            bomb.x <= sub.x + sub.width &&
            bomb.x >= sub.x && 
            bomb.y <= sub.y + sub.height &&
            bomb.y >= sub.y
        ){
            console.log('calling resetgame')
            resetGame()
        }
    })
}

let bombsArr = []

class Bomb {
    constructor(x, y){
        this.width = 10
        this.height = 10
        this.x = x - this.width/2
        this.y = y
        this.speed = 2
        this.alive = true
    }

    update(){
        this.y += this.speed
    }

    draw(){
        if (this.alive){
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}



