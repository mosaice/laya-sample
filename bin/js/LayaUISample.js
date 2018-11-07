var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var privileges = [
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
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        _this._score = 0;
        _this._myPrivileges = [];
        _this._message = [];
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
        _this.startBtn.visible = true;
        _this.startBtn.on(Laya.Event.CLICK, _this, _this.start);
        _this.confrimBtn.on(Laya.Event.CLICK, _this, _this.confrim);
        return _this;
    }
    TestUI.prototype.start = function () {
        this.startBtn.visible = false;
        this.ready.visible = true;
    };
    TestUI.prototype.confrim = function () {
        this.ready.visible = false;
        this.topbar.visible = true;
        this._score = 0;
        this.countDown();
    };
    TestUI.prototype.startFallDown = function () {
        var _this = this;
        var img = new Laya.Sprite();
        var imgWidth = 317;
        var imgHeight = 200;
        var _a = [imgWidth, Laya.Browser.clientWidth - imgWidth], minX = _a[0], maxX = _a[1];
        var randomX = ~~(Math.random() * (maxX - minX)) + minX;
        img.loadImage("yuanbao.png", randomX, imgHeight + 20, imgWidth, imgHeight);
        img.on(Laya.Event.CLICK, this, function () {
            _this._score += 5;
            _this.score.changeText(_this._score + '');
            img.destroy();
            var randomP = privileges[~~(Math.random() * privileges.length)];
            if (_this._myPrivileges.length < 6 &&
                !~_this._myPrivileges.indexOf(randomP) &&
                !(~~(Math.random() * 10) % 3)) {
                _this._myPrivileges.push(randomP);
                _this.addMessage(randomP);
            }
        });
        //添加到舞台
        Laya.stage.addChild(img);
        Laya.Tween.to(img, { y: 1335 }, 1500, Laya.Ease.linearInOut, Laya.Handler.create(this, function () { return img.destroy(); }), 20);
    };
    TestUI.prototype.countDown = function () {
        var _this = this;
        var time = +this.count.text;
        if (time > 0) {
            time--;
            this.startFallDown();
            this.count.changeText(time + '');
            setTimeout(function () { return _this.countDown(); }, 1000);
        }
        else {
            this._message.forEach(function (text) { return text.destroy(); });
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
    };
    TestUI.prototype.showResult = function () {
        var result = "\u83B7\u5F97\u4E86\u4EE5\u4E0B\u6743\u76CA\n\n" + this._myPrivileges.join('\n\n');
        var text = new Laya.Text();
        text.width = this.resultContent.width;
        text.color = '#fff';
        text.fontSize = 30;
        text.changeText(result);
        text.align = 'center';
        this.resultContent.addChild(text);
        this.result.visible = true;
    };
    TestUI.prototype.addMessage = function (p) {
        var text = new Laya.Text();
        text.color = '#ffffff';
        text.fontSize = 30;
        text.changeText(p);
        var len = this._message.length;
        text.x = 20;
        text.y = 1334 - ((len + 1) * 50);
        Laya.stage.addChild(text);
        this._message.push(text);
    };
    return TestUI;
}(ui.test.TestPageUI));
function beginLoad() {
    Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(750, 1334, WebGL);
Laya.stage.screenMode = 'vertical';
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
//# sourceMappingURL=LayaUISample.js.map