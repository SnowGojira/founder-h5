//global variable
var   w = document.documentElement.clientWidth,
      h = document.documentElement.clientHeight;

var   original = w*0.275,
      scale = original/130,
      positonY=0.489*w;
//train's stop locations
const loc_1 = {x:h*3/4, b:8000};
//the logic going here

function Sound (id_str){
    this.id = id_str;
}


Sound.prototype.play = function () {
    console.log("sound play is triggered "+ this.id);
    let audio = document.getElementById(this.id);

    if(audio){
        audio.play().catch(e =>
            console.log("sound play method has something wrong: "+e)
        );
        document.addEventListener("WeixinJSBridgeReady", () => {
            audio.play().catch(e =>
                console.log("sound wechat play method has something wrong: "+e)
            );
        }, false);
    }
};

var Train = function (){
    this.train = new createjs.Bitmap("./images/train.png");
    this.railway = new createjs.Bitmap("./images/railway.png");
    this.stage = new createjs.Stage("canvas1");
};
Train.prototype.update = function(x,b,callback){
    createjs.Tween.get(this.train, {loop: false})
        .to({x: x}, b, createjs.Ease.getPowInOut(4)).call(callback);
};

Train.prototype.render = function(){

    this.stage.canvas.width=h;
    this.stage.canvas.height=w;

    this.train.scaleX=scale;
    this.train.scaleY=scale;
    this.railway.scaleY=scale;

//设置在舞台中的位置
    this.train.x=1000;
    this.train.y=positonY;
    this.railway.y=positonY;
// 把动画放到舞台上，创建一个间隔事件侦听，进行动画
    this.stage.addChild(this.railway);
    this.stage.addChild(this.train);

    createjs.Ticker.setFPS(45);
    createjs.Ticker.on('tick',this.stage);
};



///////////////////////Instantiate Objects/////////////////////////////
var audio_wrong = new Sound('audio_wrong'),
    audio_right = new Sound('audio_right'),
    audio_out = new Sound('audio_out'),
    audio_start = new Sound('audio_start'),
    audio_run = new Sound('audio_running'),
    audio_bg = new Sound('audio_bg'),

    express = new Train();

// var audioArr = [audio_run,audio_start,audio_bg,audio_out,audio_right,audio_run,audio_wrong];


// renderAudios();
////////////////////////functions' reference//////////////////////////////
// function renderAudios (){
//      audioArr.forEach(function (audio) {
//          audio.render();
//      });
// };



document.addEventListener('DOMContentLoaded', function () {
    console.log('domcontentloaded is trigered');
    // var context = new AudioContext();
    //audio_start.muted = false;
    //audio_start.play();
});

$("body").on('click',function(){
    console.log('body on click');
    //audio_bg.Play();
    audio_start.play();
});