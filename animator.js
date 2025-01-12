class Animator {
    constructor (spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        // frame count = number of frames in the image
        // frame duration = time spent on each frame
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration; // total time for all frames to be played
        this.scale = 3;
    };

    drawFrame(tick, ctx, x, y) {

        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        
        const frame = this.currentFrame();

        ctx.drawImage (this.spritesheet, 
            this.xStart, this.yStart + this.height * frame, 
            this.width, this.height, 
            x, y, 
            this.width * this.scale, this.height * this.scale)
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }
}