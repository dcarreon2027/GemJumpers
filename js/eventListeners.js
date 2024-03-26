window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            if (player.velocity.y == 0) player.velocity.y = -4.5
            keys.w.pressed = true
            break
        case 'W':
            if (player.velocity.y == 0) player.velocity.y = -4.5
            break
        case 'a':
            // move player right
            keys.a.pressed = true
            break
        case 'A':
            // move player right
            keys.a.pressed = true
            break
        case 's':
            if (player.velocity.y >> 0) player.velocity.y = 5.05
            break
        case 'S':
            if (player.velocity.y >> 0) player.velocity.y = 5.05
            break
        case 'd':
            //move player right
            keys.d.pressed = true
            break
        case 'D':
            //move player right
            keys.d.pressed = true
            break
        case 'ArrowUp':
            if (player2.velocity.y == 0) player2.velocity.y = -4.5
            keys.ArrowUp.pressed = true
            break
        case 'ArrowLeft':
            // move player right
            keys.ArrowLeft.pressed = true
            break
        case 'ArrowDown':
            if (player2.velocity.y >> 0) player2.velocity.y = 5.05
            break
        case 'ArrowRight':
            //move player right
            keys.ArrowRight.pressed = true
            break
    }
    console.log(event)
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
        case 'a':
            // move player right
            keys.a.pressed = false
            break
        case 'A':
            // move player right
            keys.a.pressed = false
            break
        case 'ArrowLeft':
            // move player right
            keys.ArrowLeft.pressed = false
            break
        case 'd':
            //move player right
            keys.d.pressed = false
            break
        case 'D':
            //move player right
            keys.d.pressed = false
            break
        case 'ArrowRight':
            //move player right
            keys.ArrowRight.pressed = false
            break
    }
})

