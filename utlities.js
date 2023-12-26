
function animate(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
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
}
animate()

//event listener

window.addEventListener('keydown', function(e){
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