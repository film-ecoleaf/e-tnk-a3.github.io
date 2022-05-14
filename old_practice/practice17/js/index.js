let app = new PIXI.Application
    ({ width: 500, height: 500 });
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from('../images/god-pic.jpg');
img.width = 500;
img.height = 500;
app.stage.addChild(img);