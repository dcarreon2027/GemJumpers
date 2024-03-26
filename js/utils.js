Array.prototype.parse2D = function () {
    const rows = []
    for (let i = 0; i < this.length; i += 64) {
        rows.push(this.slice(i, i + 64))
    }

    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const collisionBlocks = []; // Initialize collisionBlocks array

    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 1) {
                // Create a new CollisionBlock object and push it into collisionBlocks array
                collisionBlocks.push(
                    new CollisionBlock({
                        position: {
                            x: x * 18,
                            y: y * 32,
                        },
                    })
                );
            }
        });
    });

    return collisionBlocks
}