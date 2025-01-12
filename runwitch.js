class RunWitch {
    constructor(game) {
        this.game = game;
        this.animator = new Animator (ASSET_MANAGER.getAsset("./sprites/B_witch_run.png"), 0, 0, 32, 48, 8, 0.2);

        this.x = 0;
        this.y = 75;
        this.width = 1024
        this.speed = 100; 
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > this.width) this.x = 25;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}