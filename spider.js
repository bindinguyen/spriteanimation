class Spider {
    constructor(game, x, y, path) {
        Object.assign(this, {game, x, y, path});

        this.animator = new Animator (ASSET_MANAGER.getAsset("./sprites/Spider Sprite Sheet.png"), 0, 35, 32, 32, 5, .25, 3, false);

        this.targetID = 0;
        if (this.path && this.path[this.targetID]) this.target = this.path[this.targetID];

        this.dashSpeed = 100;
        this.skitterSpeed = 75;
        this.walkSpeed = 30;

        this.facing = 0; // 0 is left, 1 is right
        this.state = 0; // 0 walking, 1 skitter, 2 attack, 3 dead
    
    };

    update() {
        var dist = getDistance(this, this.target);

        if (dist < 5) { // if the spider is close enough
            if (this.targetID < this.path.length - 1 && this.target === this.path[this.targetID]) {
                // if there exists another point in path & spider is at the target spot
                // update to next target 
                this.targetID++;
            } else if (this.targetID = this.path.length - 1 && this.target === this.path[this.targetID]) {
                this.targetID = 0;
            }
            // update current target and distance
            this.target = this.path[this.targetID];
            dist = getDistance(this, this.target);
        }

        // update velocity (direction) of character
        this.velocity = { x: (this.target.x - this.x) / dist * this.walkSpeed, y: (this.target.y - this.y) / dist * this.walkSpeed};

        console.log("targetID= " + this.targetID);
        console.log("velocityX= " + this.velocity.x + " velocityY = " + this.velocity.y);
        console.log("dist= " + dist);

        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}