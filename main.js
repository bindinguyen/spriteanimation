const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/B_witch_idle.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_attack.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_charge.png");
ASSET_MANAGER.queueDownload("./sprites/B_witch_run.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new IdleWitch(gameEngine));
	gameEngine.addEntity(new AttackWitch(gameEngine));
	gameEngine.addEntity(new ChargeWitch(gameEngine));
	gameEngine.addEntity(new RunWitch(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
