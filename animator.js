class Animator {
    constructor (spritesheet, xStart, yStart, width, height, frameCount, frameDuration, scale, vertical) {
        // frame count = number of frames in the image
        // frame duration = time spent on each frame
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration; // total time for all frames to be played
        this.currentX = this.xStart;
        this.currentY = this.yStart;
        this.scale = scale;
        this.vertical = vertical;
    };

    drawFrame(tick, ctx, x, y) {

        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        
        const frame = this.currentFrame();

        this.currentY = this.yStart;
        this.currentX = this.xStart; 

        if (this.vertical) {
            this.currentY += this.height * frame;
        } else {
            this.currentX += this.height * frame;
        }

        ctx.drawImage (this.spritesheet, 
            this.currentX, this.currentY, 
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