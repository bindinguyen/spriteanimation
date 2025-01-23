class ChargeWitch {
    constructor(game) {
        this.game = game;
        this.animator = new Animator (ASSET_MANAGER.getAsset("./sprites/B_witch_charge.png"), 0, 0, 48, 48, 5, 0.2, 3, true);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 500, 25);
    };
}