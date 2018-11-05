import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

class TestUI extends ui.test.TestPageUI {

	constructor() {
		super();

        this.startBtn.on(Laya.Event.CLICK, this, this.start)
        this.confrimBtn.on(Laya.Event.CLICK, this, this.confrim)
        
	}

    start() {
        this.startBtn.visible = false;
        this.ready.visible = true;
    }

    confrim() {
        this.ready.visible = false;
        this.topbar.visible = true;
    }
}

//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(750, 1334, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad(){
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {
    Laya.stage.screenMode = 'vertical';
    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
    Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
}