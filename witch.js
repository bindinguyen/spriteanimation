class Witch {
    // witch frame in 38 h, 21 w
    constructor(game) {
        this.game = game;
        this.animator = new Animator (ASSET_MANAGER.getAsset("./B_witch_idle.png"), 0, 0, 21, 38, 6, 0.2);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    };
}