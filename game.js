const canvas = document.getElementById('display')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

const parsedCollisions = collisionsLevel1.parse2D()
let collisionBlocks = []

collisionBlocks = parsedCollisions.createObjectsFrom2D()

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/Map.png',
})

function showCoords(event) {
    var x = event.clientX
    var y = event.clientY
    document.getElementById('coords').innerHTML = 'x, y: ' + x + ', ' + y
}

window.onload = function (event) {
    check(event)
}

var score1 = document.getElementById('score1')
var gem = document.getElementById('gem')

var gemX, gemY;

function check() {
    let box = Math.floor(Math.random() * 20) + 1;

    if (!gemX || !gemY) {
        switch (box) {
            case 1:
                gemX = 30;
                gemY = 70;
                break;
            case 2:
                gemX = Math.floor(Math.random() * (326 - 172 + 1)) + 172;
                gemY = 67;
                break;
            case 3:
                gemX = 600;
                gemY = 102;
                break;
            case 4:
                gemX = Math.floor(Math.random() * (968 - 746 + 1)) + 746;
                gemY = 65;
                break;
            case 5:
                gemX = Math.floor(Math.random() * (482 - 328 + 1)) + 328;
                gemY = 132;
                break;
            case 6:
                gemX = Math.floor(Math.random() * (125 - 26 + 1)) + 26;
                gemY = 167;
                break;
            case 7:
                gemX = Math.floor(Math.random() * (418 - 297 + 1)) + 297;
                gemY = 133;
                break;
            case 8:
                gemX = Math.floor(Math.random() * (673 - 584 + 1)) + 584;
                gemY = 197;
                break;
            case 9:
                gemX = 973;
                gemY = 135;
                break;
            case 10:
                gemX = Math.floor(Math.random() * (972 - 842 + 1)) + 842;
                gemY = 227;
                break;
            case 11:
                gemX = 732;
                gemY = 259;
                break;
            case 12:
                gemX = Math.floor(Math.random() * (546 - 394 + 1)) + 394;
                gemY = 290;
                break;
            case 13:
                gemX = Math.floor(Math.random() * (217 - 22 + 1)) + 22;
                gemY = 292;
                break;
            case 14:
                gemX = Math.floor(Math.random() * (127 - 22 + 1)) + 22;
                gemY = 357;
                break;
            case 15:
                gemX = 25;
                gemY = 454;
                break;
            case 16:
                gemX = Math.floor(Math.random() * (469 - 333 + 1)) + 333;
                gemY = 384;
                break;
            case 17:
                gemX = Math.floor(Math.random() * (885 - 683 + 1)) + 683;
                gemY = 352;
                break;
            case 18:
                gemX = Math.floor(Math.random() * (792 - 586 + 1)) + 586;
                gemY = 452;
                break;
            case 19:
                gemX = Math.floor(Math.random() * (351 - 200 + 1)) + 200;
                gemY = 452;
                break;
            case 20:
                gemX = Math.floor(Math.random() * (971 - 22 + 1)) + 22;
                gemY = 530;
                break;
            }

            if (!gemX && !gemY) {
                gemX = Math.floor(Math.random() * canvas.width);
                gemY = Math.floor(Math.random() * canvas.height);
            }
        }

    gem.style.left = gemX + 'px';
    gem.style.top = gemY + 'px';
    gem.style.display = 'block';

}

var time = 10;
var countdownEl = document.getElementById('timer');
var B1score = 0;
var B2score = 0;
var winnerImg = document.getElementById('winner');
var overlay = document.getElementById('display');
var draw = document.getElementById('options');
var options = document.getElementById('options');


setInterval(updateTimer, 1000);
function updateTimer() {
    countdownEl.innerHTML = time;
    time--;

    if (time < -1) {

        if (B1score > B2score) {
            overlay.style.opacity = '0.5';
            gem.style.opacity = '0.5';
            options.style.display = 'block';
            countdownEl.innerHTML = "WINNER";
            countdownEl.style.fontSize = "80px";

            winnerImg.src = 'blob1-crown.png';
            winnerImg.style.width = '300px';
            winnerImg.style.height = '300px';
            winnerImg.style.left = '340px';
            winnerImg.style.display = 'inline';
            
        }

        else if (B2score > B1score) {
            overlay.style.opacity = '0.5';
            gem.style.opacity = '0.5';
            options.style.display = 'block';
            countdownEl.innerHTML = "WINNER";
            countdownEl.style.fontSize = "80px";

            winnerImg.src = 'blob2-crown.png';
            winnerImg.style.width = '300px';
            winnerImg.style.height = '300px';
            winnerImg.style.left = '340px';
            winnerImg.style.display = 'inline';
        }

        else if (B2score == B1score) {
            overlay.style.opacity = '0.5';
            gem.style.opacity = '0.5';
            options.style.display = 'block';
            countdownEl.innerHTML = "DRAW";
            countdownEl.style.fontSize = "80px";

            winnerImg.src = 'blob-draw.png';
            winnerImg.style.display = 'inline';
        }
    }

}

const player = new Player({
    collisionBlocks,
    imageSrc: './img/elements/blob1-rightidle.png',
    frameRate: 1,
    animations: {
        idleRight: {
            frameRate: 1,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/elements/blob1-rightidle.png',
        },
        idleLeft: {
            frameRate: 1,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/elements/blob1-leftidle.png',
        },
        jumpRight: {
            frameRate: 16,
            frameBuffer: 2,
            loop: false,
            imageSrc: './img/elements/blob1-rightjump-sprite.png',
        },
        jumpLeft: {
            frameRate: 16,
            frameBuffer: 2,
            loop: false,
            imageSrc: './img/elements/blob1-leftjump-sprite.png',
        },
    }
})
const player2 = new Player2({
    collisionBlocks,
    imageSrc2: './img/elements/blob2-rightidle.png',
    frameRate2: 1,
    animations2: {
        idleRight2: {
            frameRate2: 1,
            frameBuffer: 2,
            loop: true,
            imageSrc2: './img/elements/blob2-rightidle.png',
        },
        idleLeft2: {
            frameRate2: 1,
            frameBuffer: 2,
            loop: true,
            imageSrc2: './img/elements/blob2-leftidle.png',
        },
        jumpRight2: {
            frameRate2: 16,
            frameBuffer: 2,
            loop: false,
            imageSrc2: './img/elements/blob2-rightjump-sprite.png',
        },
        jumpLeft2: {
            frameRate2: 16,
            frameBuffer: 2,
            loop: false,
            imageSrc2: './img/elements/blob2-leftjump-sprite.png',
        },
    }
})


const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}
function animate() {
    window.requestAnimationFrame(animate)

    backgroundLevel1.draw()
    collisionBlocks.forEach((collisionBlock) => { // Here changed to collisionBlocks
        collisionBlock.draw()
    })

    player.velocity.x = 0
    if (player.velocity.y >>> 0) {
        // Add logic to switch back to idle animation once jump is complete
        if (keys.w.pressed && !keys.a.pressed && !keys.d.pressed) {
            if (player.lastDirection === 'left') player.switchSprite('jumpLeft')
            else player.switchSprite('jumpRight')
        } else if (keys.w.pressed && keys.d.pressed) {
            player.switchSprite('jumpRight');
            player.velocity.x = 2;
            player.lastDirection = 'right';
        } else if (keys.w.pressed && keys.a.pressed) {
            player.switchSprite('jumpLeft');
            player.velocity.x = -2;
            player.lastDirection = 'left';
        }
        // Existing code...
    }
    else if (keys.d.pressed) {
        player.switchSprite('idleRight')
        player.velocity.x = 2
        player.lastDirection = 'right'
    }
    else if (keys.a.pressed) {
        player.switchSprite('idleLeft')
        player.velocity.x = -2
        player.lastDirection = 'left'
    }
    else {
        if (player.lastDirection === 'left') player.switchSprite('idleLeft')
        else player.switchSprite('idleRight')
    }

    player2.velocity.x = 0
    if (player2.velocity.y >>> 0) {
        // Add logic to switch back to idle animation once jump is complete
        if (keys.ArrowUp.pressed && !keys.ArrowLeft.pressed && !keys.ArrowRight.pressed) {
            if (player2.lastDirection === 'left') player2.switchSprite('jumpLeft2')
            else player2.switchSprite('jumpRight2')
        } else if (keys.ArrowUp.pressed && keys.ArrowRight.pressed) {
            player2.switchSprite('jumpRight2');
            player2.velocity.x = 2;
            player2.lastDirection = 'right';
        } else if (keys.ArrowUp.pressed && keys.ArrowLeft.pressed) {
            player2.switchSprite('jumpLeft2');
            player2.velocity.x = -2;
            player2.lastDirection = 'left';
        }
        // Existing code...
    }
    else if (keys.ArrowRight.pressed) {
        player2.switchSprite('idleRight2')
        player2.velocity.x = 2
        player2.lastDirection = 'right'
    }
    else if (keys.ArrowLeft.pressed) {
        player2.switchSprite('idleLeft2')
        player2.velocity.x = -2
        player2.lastDirection = 'left'
    }
    else {
        if (player2.lastDirection === 'left') player2.switchSprite('idleLeft2')
        else player2.switchSprite('idleRight2')
    }

    function resetGem() {
        gemX = null;
        gemY = null;
        check();
    }

    // Check for collision between player and gem
    if (
        player.position.x < gemX + gem.width &&
        player.position.x + player.width > gemX &&
        player.position.y < gemY + gem.height &&
        player.position.y + player.height > gemY
        ) {
        var currentScore = parseInt(score1.innerHTML);
        score1.innerHTML = currentScore + 1;
        B1score++;

        // Reset gem position
        resetGem();
    }

    if (player2.position.x < gemX + gem.width &&
        player2.position.x + player2.width > gemX &&
        player2.position.y < gemY + gem.height &&
        player2.position.y + player2.height > gemY
        ){
        var currentScore = parseInt(score2.innerHTML);
        score2.innerHTML = currentScore + 1;
        B2score++;
            
        resetGem();
        }

    if (time < -1) {
        return;
    }

    player.draw()
    player2.draw()
    player.update()
    player2.update()
}

animate()