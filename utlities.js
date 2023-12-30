function animate(){
    if (gameState === "playing"){
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
        ctx.font = "20px Arial"
        ctx.fillStyle = "white"
        ctx.fillText("Score: " + score, 10, 585)
        sub.update()
        sub.draw()
        enemiesArr.forEach((enemy) =>{
            enemy.update()
            enemy.draw()
        })
        bulletsArr.forEach(bullet => {
            bullet.update()
            bullet.draw()
        })

        bombsArr.forEach(bomb => {
            bomb.update();
            bomb.draw();
        });
        checkIfAlive()
        checkBombCollision()
        requestAnimationFrame(animate)
    } else if (gameState === "start"){
        ctx.clearRect(0,0, canvas.clientWidth, canvas.height)
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.fillText("Press Enter to Start", canvas.width/2 - 130, canvas.height/2)
        resetGame()
    }
}
animate()

//event listener

window.addEventListener('keydown', function(e){
    if (e.keyCode === 13){
        if(gameState === "start"){
            gameState = "playing"
            score = 0
            animate()
        }
    }
    keys[e.keyCode] = true
    sub.moving = true
    if (e.keyCode === 32){
        const bullet = new Bullet()
        bullet.fire(sub)       
        bulletsArr.push(bullet)
    }
})

window.addEventListener('keyup', function(e){
    if(e.keyCode !== 32) {
        delete keys[e.keyCode]
    }
    sub.moving = false
})