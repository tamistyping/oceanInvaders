const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 600

// Global Variables
let gameState = "start"
let keys = []
let score = 0
let lives = 3
let bulletsArr = []
let randomNum = 0
const submarine = new Image()
submarine.src = 'mySubSprite.png'

const groupEnemies = new Image()
groupEnemies.src = 'redEnemy.png'

const missile = new Image()
missile.src = 'missile.png'