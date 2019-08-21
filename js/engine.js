//global variable
const w = document.documentElement.clientWidth,
      h = document.documentElement.clientHeight;

const original = w*0.275,
      ratio = 45,
      scale = original/130,
      positonY=0.489*w,
      bgScaleY=h/750,
      bgScaleX=w/466;
//train's stop locations
const train_loc_1 = {x:h*3/4, b:8000};
const train_loc_2 = {x:10, b:4000};


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

//train
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

    createjs.Ticker.setFPS(ratio);
    createjs.Ticker.on('tick',this.stage);
};

//scene
function Scene(url){
    this.stage = new createjs.Stage('bg1');
    this.background = new createjs.Bitmap(url);
}

Scene.prototype.render = function(){
    this.stage.canvas.width=h;
    this.stage.canvas.height=w;
    this.background.scaleX=bgScaleY;
    this.background.scaleY=bgScaleX;
    this.background.x=-5*h;
    this.background.y=0;

    this.stage.addChild(this.background);
    createjs.Ticker.setFPS(ratio);
    createjs.Ticker.on('tick',this.stage);
};

Scene.prototype.update = function(x,b,callback){
    createjs.Tween.get(this.background, {loop: false})
        .to({x: x}, b, createjs.Ease.getPowInOut(4)).call(callback);
};

function frontScene1In() {
    // console.log("前景一创建");
    stage_fbg1.canvas.width=h;
    stage_fbg1.canvas.height=w;
    frontgrond1.scaleX=bgScaleY;
    frontgrond1.scaleY=bgScaleX;
    frontgrond1.x=-5*h;
    frontgrond1.y=0;
    stage_fbg1.addChild(frontgrond1);
    createjs.Ticker.setFPS(ratio);
    createjs.Ticker.on('tick',stage_fbg1);
}

///////////////////////Instantiate Objects/////////////////////////////
var audio_wrong = new Sound('audio_wrong'),
    audio_right = new Sound('audio_right'),
    audio_out = new Sound('audio_out'),
    audio_start = new Sound('audio_start'),
    audio_run = new Sound('audio_running'),
    audio_bg = new Sound('audio_bg'),

    speed_train = new Train(),
    back_scene = new Scene('./images/page1/bgt1.png');

// var audioArr = [audio_run,audio_start,audio_bg,audio_out,audio_right,audio_run,audio_wrong];


// renderAudios();
////////////////////////functions' reference//////////////////////////////

function preload (handleFileProgress,handleComplete){
    let manifest = [
        {src: 'asset/audio/out.mp3', id: 'sona2'},
        {src: 'asset/audio/right.mp3', id: 'sona3'},
        {src: 'asset/audio/running.mp3', id: 'sona4'},
        {src: 'asset/audio/start.mp3', id: 'sona5'},
        {src: 'asset/audio/wrong.mp3', id: 'sona6'},
        {src: 'asset/audio/bg.mp3', id: 'sona7'},
        {src: 'asset/font/timing-light.TTF', id: 'font1'},
        {src: 'asset/font/writing-light.TTF', id: 'font2'},

        {src: 'images/page1/btn.png', id: 'p12'},
        {src: 'images/page1/bubble.png', id: 'p13'},
        {src: 'images/page1/hint.png', id: 'p15'},
        {src: 'images/page1/title.png', id: 'p16'},
        {src: 'images/page1/fbgt.png', id: 'p18'},
        {src: 'images/page1/bgt1.png', id: 'p19'},

        {src: 'images/page2/snow1.png', id: 'p20'},
        {src: 'images/page2/fa1.png', id: 'p21'},
        {src: 'images/page2/fa2.png', id: 'p22'},
        {src: 'images/page2/fa3.png', id: 'p23'},
        {src: 'images/page2/fa4.png', id: 'p24'},
        {src: 'images/page2/fa5.png', id: 'p25'},
        {src: 'images/page2/fa6.png', id: 'p26'},


        {src: 'images/page3/cloud.png', id: 'p30'},
        {src: 'images/page3/fa1.png', id: 'p31'},
        {src: 'images/page3/fa2.png', id: 'p32'},
        {src: 'images/page3/fa3.png', id: 'p33'},
        {src: 'images/page3/fa4.png', id: 'p34'},
        {src: 'images/page3/fa5.png', id: 'p35'},
        {src: 'images/page3/fa6.png', id: 'p36'},
        {src: 'images/page3/fa7.png', id: 'p37'},
        {src: 'images/page3/signal.png', id: 'p38'},

        {src: 'images/page4/heart.png', id: 'p40'},
        {src: 'images/page4/fa1.png', id: 'p41'},
        {src: 'images/page4/fa2.png', id: 'p42'},
        {src: 'images/page4/fa3.png', id: 'p43'},
        {src: 'images/page4/fa4.png', id: 'p44'},
        {src: 'images/page4/fa5.png', id: 'p45'},
        {src: 'images/page4/fa6.png', id: 'p46'},
        {src: 'images/page4/fa7.png', id: 'p47'},
        {src: 'images/page4/fa8.png', id: 'p48'},

        {src: 'images/page5/flower.png', id: 'p50'},
        {src: 'images/page5/fa1.png', id: 'p51'},
        {src: 'images/page5/fa2.png', id: 'p52'},
        {src: 'images/page5/fa3.png', id: 'p53'},
        {src: 'images/page5/fa4.png', id: 'p54'},
        {src: 'images/page5/fa5.png', id: 'p55'},
        {src: 'images/page5/fa6.png', id: 'p56'},
        {src: 'images/page5/fa7.png', id: 'p57'},
        {src: 'images/page5/money.png', id: 'p58'},

        {src: 'images/page6/flag.png', id: 'p63'},
        {src: 'images/page6/solgan1.png', id: 'p64'},
        {src: 'images/page6/solgan2.png', id: 'p65'},
        {src: 'images/page6/check.png', id: 'p60'},
        {src: 'images/page6/money.png', id: 'p61'},

        {src: 'images/page7/bg.png', id: 'p71'},
        {src: 'images/page7/border1.png', id: 'p72'},
        {src: 'images/page7/share.png', id: 'p73'},
        {src: 'images/page7/btn1.png', id: 'p74'},
        {src: 'images/page7/btn2.png', id: 'p75'},
        {src: 'images/page7/btn3.png', id: 'p76'},

        {src: 'images/railway.png', id: 'p1'},
        {src: 'images/timer.png', id: 'p2'},
        {src: 'images/train.png', id: 'p3'},

        {src: 'images/title1/0.png', id: 't10'},
        {src: 'images/title1/1.png', id: 't11'},
        {src: 'images/title1/2.png', id: 't12'},
        {src: 'images/title1/3.png', id: 't13'},
        {src: 'images/title1/4.png', id: 't14'},
        {src: 'images/title1/5.png', id: 't15'},
        {src: 'images/title1/6.png', id: 't16'},
        {src: 'images/title1/7.png', id: 't17'},
        {src: 'images/title1/8.png', id: 't18'},
        {src: 'images/title1/9.png', id: 't19'},
        {src: 'images/title1/10.png', id: 't110'},
        {src: 'images/title1/11.png', id: 't111'},
        {src: 'images/title1/12.png', id: 't112'},
        {src: 'images/title1/13.png', id: 't113'},
        {src: 'images/title1/14.png', id: 't114'},

        {src: 'images/title2/0.png', id: 't20'},
        {src: 'images/title2/1.png', id: 't21'},
        {src: 'images/title2/2.png', id: 't22'},
        {src: 'images/title2/3.png', id: 't23'},
        {src: 'images/title2/4.png', id: 't24'},
        {src: 'images/title2/5.png', id: 't25'},
        {src: 'images/title2/6.png', id: 't26'},
        {src: 'images/title2/7.png', id: 't27'},
        {src: 'images/title2/8.png', id: 't28'},
        {src: 'images/title2/9.png', id: 't29'},
        {src: 'images/title2/10.png', id: 't210'},
        {src: 'images/title2/11.png', id: 't211'},
        {src: 'images/title2/12.png', id: 't212'},
        {src: 'images/title2/13.png', id: 't213'},
        {src: 'images/title2/14.png', id: 't214'},

        {src: 'images/title3/0.png', id: 't30'},
        {src: 'images/title3/1.png', id: 't31'},
        {src: 'images/title3/2.png', id: 't32'},
        {src: 'images/title3/3.png', id: 't33'},
        {src: 'images/title3/4.png', id: 't34'},
        {src: 'images/title3/5.png', id: 't35'},
        {src: 'images/title3/6.png', id: 't36'},
        {src: 'images/title3/7.png', id: 't37'},
        {src: 'images/title3/8.png', id: 't38'},
        {src: 'images/title3/9.png', id: 't39'},
        {src: 'images/title3/10.png', id: 't310'},


        {src: 'images/title4/0.png', id: 't40'},
        {src: 'images/title4/1.png', id: 't41'},
        {src: 'images/title4/2.png', id: 't42'},
        {src: 'images/title4/3.png', id: 't43'},
        {src: 'images/title4/4.png', id: 't44'},
        {src: 'images/title4/5.png', id: 't45'},
        {src: 'images/title4/6.png', id: 't46'},
        {src: 'images/title4/7.png', id: 't47'},
        {src: 'images/title4/8.png', id: 't48'},
        {src: 'images/title4/9.png', id: 't49'},
        {src: 'images/title4/10.png', id: 't410'},
        {src: 'images/title4/11.png', id: 't411'},
        {src: 'images/title4/12.png', id: 't412'}

    ];
    //预加载
    loader = new createjs.LoadQueue(false);
    // 关键！----设置并发数
    loader.setMaxConnections(100);
// 关键！---一定要将其设置为 true, 否则不起作用。
    loader.maintainScriptOrder=true;
    loader.installPlugin(createjs.Sound);
    loader.loadManifest(manifest);
    loader.addEventListener('progress', handleFileProgress);//加载完成 调用handleFileProgress函数
    loader.addEventListener('complete', handleComplete);//加载完成 调用handleComplete函数

};


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