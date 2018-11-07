
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.test {
    export class TestPageUI extends View {
		public ani1:Laya.FrameAnimation;
		public topbar:Laya.Box;
		public count:laya.display.Text;
		public score:laya.display.Text;
		public ready:Laya.Box;
		public confrimBtn:Laya.Image;
		public startBtn:Laya.Image;
		public result:Laya.Image;
		public resultContent:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"x":196,"width":750,"pivotX":196,"height":1334},"child":[{"type":"Image","props":{"skin":"big-bg.jpg"}},{"type":"Box","props":{"y":0,"x":21,"visible":false,"var":"topbar","name":"顶部文字"},"child":[{"type":"Text","props":{"x":304,"width":99,"var":"count","text":"30","height":100,"fontSize":80,"font":"Helvetica","color":"#ed7220"}},{"type":"Text","props":{"y":40,"width":126,"text":"当前得分","name":"当前","height":37,"fontSize":30,"font":"Helvetica","color":"#ed7220"}},{"type":"Text","props":{"y":40,"x":129,"width":126,"var":"score","text":"00","height":37,"fontSize":30,"font":"Helvetica","color":"#ed7220"}}]},{"type":"Box","props":{"y":443,"x":150,"visible":false,"var":"ready"},"child":[{"type":"Image","props":{"y":167,"x":224,"width":210,"skin":"shake-hand.png","rotation":0,"pivotY":116,"pivotX":104,"height":221}},{"type":"Text","props":{"y":259,"x":0,"text":"点击元宝来获取权益","fontSize":50,"font":"Helvetica","color":"#fff"}},{"type":"Image","props":{"y":358,"x":88,"var":"confrimBtn","skin":"知道了.png"}}]},{"type":"Image","props":{"y":741,"x":376,"width":350,"visible":false,"var":"startBtn","skin":"开始游戏.png","pivotY":57,"pivotX":176,"height":125},"compId":52},{"type":"Image","props":{"visible":false,"var":"result","skin":"恭喜你.png"},"child":[{"type":"Box","props":{"y":736,"x":375,"width":521,"var":"resultContent","pivotY":204,"pivotX":257,"height":430}}]}],"animations":[{"nodes":[{"target":52,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"cubicInOut","tween":true,"target":52,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"cubicInOut","tween":true,"target":52,"key":"scaleY","index":15},{"value":1,"tweenMethod":"cubicInOut","tween":true,"target":52,"key":"scaleY","index":30}],"scaleX":[{"value":1,"tweenMethod":"cubicInOut","tween":true,"target":52,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"cubicInOut","tween":true,"target":52,"key":"scaleX","index":15},{"value":1,"tweenMethod":"cubicInOut","tween":true,"target":52,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}
