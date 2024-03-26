// player
class Player2 extends Sprite2 {
    constructor({
        collisionBlocks = [], imageSrc2, frameRate2, animations2
    }) {
        super({ imageSrc2, frameRate2, animations2 })
        this.position = {
            x: 105,
            y: 520,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 0.09

        this.collisionBlocks = collisionBlocks
    }



    update() {
        // this is the blue box
        // c.fillStyle = 'rgb(1, 250, 5, 0.5)'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x

        this.updateHitbox()

        this.checkForHorizontalCollisions()
        this.applyGravity()

        this.updateHitbox()

        if (this.velocity.y !== 0) {
            // Check if the player is moving left or right
            if (this.velocity.x > 0) {
                this.switchSprite('jumpRight2');
            } else if (this.velocity.x < 0) {
                this.switchSprite('jumpLeft2');
            }
        }

        // c.fillRect(this.hitbox.position.x,
        //     this.hitbox.position.y,
        //     this.hitbox.width,
        //     this.hitbox.height
        // )
        this.checkForVerticalCollisions()
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate2 = this.animations[name].frameRate2
        this.frameBuffer = this.animations[name].frameBuffer

    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: 31,
            height: 21,
        }
    }
    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // if a collision exists
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                //collision on x axis going to the left
                if (this.velocity.x < 0) {
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
                    break
                }

                if (this.velocity.x > 0) {
                    const offset =
                        this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }
            }
        }
    }
    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // if a collision exists
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                    break
                }

                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset =
                        this.hitbox.position.y - this.position.y + this.hitbox.height
                    this.position.y = collisionBlock.position.y - offset - 0.01
                    break
                }
            }
        }
    }
}
