class Animator {
    constructor (spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        // frame count = number of frames in the image
        // frame duration = time spent on each frame
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {

        this.elapsedTime += tick;
        const frame = this.currentFrame();

        ctx.drawImage (this.spritesheet, 
            this.xStart, this.yStart + this.height * frame, 
            this.width, this.height, 
            x, y, 
            this.width, this.height )
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }
}