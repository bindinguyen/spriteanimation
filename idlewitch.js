class IdleWitch {
    // witch frame in 48 h, 32 w
    constructor(game) {
        this.game = game;
        this.animator = new Animator (ASSET_MANAGER.getAsset("./sprites/B_witch_idle.png"), 0, 0, 32, 48, 6, 0.175, 3, true);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    };
}