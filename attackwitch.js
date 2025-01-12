class AttackWitch {
    constructor(game) {
        this.game = game;
        this.animator = new Animator (ASSET_MANAGER.getAsset("./sprites/B_witch_attack.png"), 0, 0, 104, 46, 9, 0.25);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 150, 25);
    };
}