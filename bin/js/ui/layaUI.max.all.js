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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "props": { "x": 196, "width": 750, "pivotX": 196, "height": 1334 }, "child": [{ "type": "Image", "props": { "skin": "big-bg.jpg" } }, { "type": "Button", "props": { "y": 859, "x": 373, "width": 395, "visible": true, "var": "startBtn", "pivotY": 78, "pivotX": 196, "name": "开始", "labelSize": 80, "labelFont": "Helvetica", "labelColors": "#ffffff", "labelBold": true, "label": "开始游戏", "height": 154 }, "compId": 43 }, { "type": "Box", "props": { "y": 0, "x": 21, "visible": false, "var": "topbar", "name": "顶部文字" }, "child": [{ "type": "Text", "props": { "x": 304, "width": 99, "var": "count", "text": "30", "height": 100, "fontSize": 80, "font": "Helvetica", "color": "#ed7220" } }, { "type": "Text", "props": { "y": 40, "width": 126, "text": "当前得分", "name": "当前", "height": 37, "fontSize": 30, "font": "Helvetica", "color": "#ed7220" } }, { "type": "Text", "props": { "y": 40, "x": 129, "width": 126, "var": "score", "text": "00", "height": 37, "fontSize": 30, "font": "Helvetica", "color": "#ed7220" } }] }, { "type": "Box", "props": { "y": 443, "x": 150, "visible": false, "var": "ready" }, "child": [{ "type": "Image", "props": { "y": 213, "x": 218, "width": 210, "skin": "shake-hand.png", "rotation": 90, "pivotY": 162, "pivotX": 147, "height": 221 }, "compId": 49 }, { "type": "Button", "props": { "y": 333, "x": 97, "width": 256, "var": "confrimBtn", "labelSize": 80, "labelFont": "Helvetica", "labelColors": "#ffffff", "label": "知道了", "height": 120 } }, { "type": "Text", "props": { "y": 259, "x": 0, "text": "晃动手机来接住红包", "fontSize": 50, "font": "Helvetica" } }] }], "animations": [{ "nodes": [{ "target": 43, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "cubicInOut", "tween": true, "target": 43, "key": "scaleY", "index": 0 }, { "value": 1.3, "tweenMethod": "cubicInOut", "tween": true, "target": 43, "key": "scaleY", "index": 15 }, { "value": 1, "tweenMethod": "cubicInOut", "tween": true, "target": 43, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 1, "tweenMethod": "cubicInOut", "tween": true, "target": 43, "key": "scaleX", "index": 0 }, { "value": 1.3, "tweenMethod": "cubicInOut", "tween": true, "target": 43, "key": "scaleX", "index": 15 }, { "value": 1, "tweenMethod": "cubicInOut", "tween": true, "target": 43, "key": "scaleX", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }, { "nodes": [{ "target": 49, "keyframes": { "rotation": [{ "value": 90, "tweenMethod": "quintInOut", "tween": true, "target": 49, "key": "rotation", "index": 0 }, { "value": -30, "tweenMethod": "quintInOut", "tween": true, "target": 49, "key": "rotation", "index": 20 }, { "value": 90, "tweenMethod": "quintInOut", "tween": true, "target": 49, "key": "rotation", "index": 40 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 2 }] };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map