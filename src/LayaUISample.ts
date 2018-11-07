import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

const privileges = [
    '名医养生巡演',
    '健康会所课程体验',
    '高端产品定制咨询',
    '海闻教育奖学金',
    '专属投资策略白皮书',
    '基础税务咨询',
    '峰会VIP坐席',
    '大客户开放日',
    '钻石尊享会入会礼遇',
    '钻石会员尊享年会'
];

class TestUI extends ui.test.TestPageUI {
    private _score: number = 0;
    private _myPrivileges = [];
    private _message = []; 

	constructor() {
		super();

//         if (Laya.Browser.onMiniGame) {
//             const wx = Laya.Browser.window.wx;
//                     console.log('111');            
//                 wx.onShow(() => {
//                     console.log('show');
//                     try {
//                         var value = wx.getStorageSync('privileges');
//                         console.log(value);
//                         if (value) {
//                             this._myPrivileges = JSON.parse(value);
//                             this.showResult();
//                         } else {
//                             this.startBtn.visible = true;                            
//                         }
//                     } catch (e) {
//                         this.startBtn.visible = true;
//                     }
//                 });
//         } else {

//         }

        this.startBtn.visible = true;
        

        



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
        this._score = 0;
        this.countDown();
    }

    startFallDown() {
        const img = new Laya.Sprite();
        const imgWidth = 317;
        const imgHeight = 200;
        const [minX, maxX] = [imgWidth, Laya.Browser.clientWidth - imgWidth];
        const randomX = ~~(Math.random() * (maxX - minX)) + minX;
   
        img.loadImage("yuanbao.png",randomX,imgHeight+ 20,imgWidth,imgHeight);

        img.on(Laya.Event.CLICK,this, () => {
            this._score+=5;
            this.score.changeText(this._score + '');
            img.destroy();
            const randomP = privileges[~~(Math.random() * privileges.length)];
            if (this._myPrivileges.length < 5 &&
                !~this._myPrivileges.indexOf(randomP) &&
                !(~~(Math.random() * 10) % 3)
                )
            {
                this._myPrivileges.push(randomP);
                this.addMessage(randomP);
            }
        });
        //添加到舞台
        Laya.stage.addChild(img);

        Laya.Tween.to(img, {y: 1335}, 1500, Laya.Ease.linearInOut, Laya.Handler.create(this, () => img.destroy()), 20)
    }

    countDown() {
        let time = +this.count.text;
        if (time > 0) {
            time--;
            this.startFallDown();
            this.count.changeText(time + '');
            setTimeout(() => this.countDown(), 1000)
        } else {
            this._message.forEach(text => text.destroy());
            this.topbar.visible = false;
            this.showResult();
            // if (Laya.Browser.onMiniGame) {
            //     const wx = Laya.Browser.window.wx;
            //     wx.setStorage({
            //         key: "privileges",
            //         data: JSON.stringify(this._myPrivileges)
            //     });
            // }
        }
    }

    showResult() {
        const result = `获得了以下权益\n\n${this._myPrivileges.join('\n\n')}`;
        const text = new Laya.Text();
        text.width = this.resultContent.width;
        text.color = '#fff';
        text.fontSize = 30;
        text.changeText(result);
        text.align = 'center';

        this.resultContent.addChild(text);
        this.result.visible = true;
    }

    addMessage(p: string) {
        const text = new Laya.Text();
        text.color = '#ffffff';
        text.fontSize = 30;
        text.changeText(p);

        const len = this._message.length;

        text.x = 20;
        text.y = 1334 - ((len + 1) * 50);
        Laya.stage.addChild(text);
        this._message.push(text);
    }

}

function beginLoad(){
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {

	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
}


//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(750, 1334, WebGL);

Laya.stage.screenMode = 'vertical';
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE

//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
