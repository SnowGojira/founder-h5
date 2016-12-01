/**
 * Created by hakuh on 2016/12/1.
 */

var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;

function init() {
    var  stage=new createjs.Stage("canvas"),
         container = new createjs.Container();

    stage.canvas.width=h;
    stage.canvas.height=w;

    var train= new createjs.Bitmap("./images/train.png");
    train.scaleX=0.6;
    train.scaleY=0.6
//设置在舞台中的位置
    train.x=1000;
    train.y=0.25*h;
// 把动画放到舞台上，创建一个间隔事件侦听，进行动画
    stage.addChild(train);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.on('tick',stage);
    /*createjs.Ticker.addEventListener("tick",tick);*/

    createjs.Tween.get(train, {loop: false})
        .to({x: 200}, 10000, createjs.Ease.getPowInOut(4))

}

init();

    // 定义SpriteSheet 参数
   /* data={
        /!*定义动画*!/
        "animations":{
            // start, end, next, speed
            "run": [0, 25, "run",1.5],
            //start,end,next,speed开始帧，结束帧，下一个动作，运行速度
            "jump": [26, 63, "run",1.5]
        },
        /!*定义图像路径,使用图像或图像的url列表*!/
        "images": ["images/runningGrant.png"],
        /!*定义框架:
         简单的方法来定义框架,只需要连续帧大小（框架的大小就是单个帧的图片大小）*!/
        "frames":{
            //单个帧的高度，宽度，就是png图片里面那么多个帧一个帧的大小
            "height": 292.5,
            "width":165.75,
            //相对于原始偏移的位置
            "regX": 0,
            "regY": 0,
            //帧数
            "count": 64
        }
    };*/

//实例精灵动画集
// var move = new createjs.SpriteSheet(data);
//SpriteSheet类设置帧和动画,里面的run为开始的动画
// var grant = new createjs.Sprite(move,"run");
// 创建一个图片，让图片运行起来
/*container.addChild(grant);
stage.addChild(container);*/


//speed用来做加速度
/*var speed=1;
function tick(){
    if(!createjs.Ticker.getPaused()){
        // grant.x+=3*speed;
        train.x=3*speed;
        stage.update(); //更新舞台
        speed+=.01;
        (grant.x>stage.canvas.width) && (grant.x=0,speed=1)
    }
}*/

//侦听鼠标事件
/*stage.addEventListener("stagemousedown",handleClick);
function handleClick(){
    grant.gotoAndPlay("jump");
}*/


//设置按钮暂停
/*$(function(){
    setTimeout(function () {
        // createjs.Ticker.getPaused();
        createjs.Ticker.setPaused(true);
        // togglePause();
    },2000);

});*/


/*function togglePause(){
    //grant.gotoAndStop();
    //其实实现暂停和运动就是false和true切换
    var paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
    btn.value = paused ? "运动play" : "暂停pause";
}*/

// stage.update();
//更新舞台
