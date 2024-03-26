class Sprite {
    constructor({ position, imageSrc, frameRate = 1, animations }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.frameRate
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.loaded = false
        this.frameRate = frameRate
        this.currentFrame = 0
        this.elapsedFrames = 0
        this.frameBuffer = 2
        this.animations = animations

        if (this.animations) {
            for (let key in this.animations) {
                const image = new Image()
                image.src = this.animations[key].imageSrc
                this.animations[key].image = image
            }

        }
    }
    draw() {
        if (!this.loaded) return
        const cropbox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0
            },
            width: this.width,
            height: this.height,
        }

        c.drawImage(this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )

        this.updateFrames()
    }

    updateFrames() {
        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) this.currentFrame++
            else this.currentFrame = 0
        }
    }
}

class Sprite2 {
    constructor({ position, imageSrc2, frameRate2 = 1, animations2 }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.frameRate2
            this.height = this.image.height
        }
        this.image.src = imageSrc2
        this.loaded = false
        this.frameRate2 = frameRate2
        this.currentFrame2 = 0
        this.elapsedFrames = 0
        this.frameBuffer = 2
        this.animations = animations2

        if (this.animations) {
            for (let key in this.animations) {
                const image = new Image()
                image.src = this.animations[key].imageSrc2
                this.animations[key].image = image
            }

        }
    }
    draw() {
        if (!this.loaded) return
        const cropbox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0
            },
            width: this.width,
            height: this.height,
        }

        c.drawImage(this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )

        this.updateFrames()
    }

    updateFrames() {
        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate2 - 1) this.currentFrame++
            else this.currentFrame = 0
        }
    }
}