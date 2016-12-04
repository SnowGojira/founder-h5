/**
 * Created by hakuh on 2016/11/28.
 */
// 横屏设置，以及重力监听
LGlobal={};
document.addEventListener("DOMContentLoaded",function(){
    setScreen();
});
function setScreen(){
    var loaded=false;
    roScreen();
    function roScreen(){
       /* var b=document.getElementsByTagName("body")[0];
        var t=document.getElementsByTagName("html")[0];*/
        var lo=document.getElementsByClassName("pageBox")[0];
        var ps=document.getElementsByClassName("page")[0];
        var lock=document.getElementsByClassName("lock")[0];
        setTimeout(function(){
            var w=LGlobal.w=window.innerWidth;
            var h=LGlobal.h=window.innerHeight;
            ps.style.width=lo.style.width=h+"px";
            ps.style.height=lo.style.height=w+"px";
            lo.style.transformOrigin=lo.style.webkitTransformOrigin="left top";
            ps.style.transformOrigin=ps.style.webkitTransformOrigin="left top";
            lo.style.transform=lo.style.webkitTransform="translate("+window.innerWidth+"px,0) rotate(90deg)";
            ps.style.transform=ps.style.webkitTransform="translate("+window.innerWidth+"px,0) rotate(90deg)";
            window.addEventListener("resize",change);

            // 监听锁屏事件
            function change(){

                if(window.innerWidth<window.innerHeight){
                    ps.style.width=lo.style.width=h+"px";
                    ps.style.height=lo.style.height=w+"px";
                    lo.style.transform=lo.style.webkitTransform="translate("+window.innerWidth+"px,0) rotate(90deg)";
                    ps.style.transform=ps.style.webkitTransform="translate("+window.innerWidth+"px,0) rotate(90deg)";
                    if(loaded){
                        loaded=false;
                        lock.style.display="none";
                    }

                }
                if(window.innerWidth>window.innerHeight){
                    if(!loaded&&!LGlobal.focus){
                        lock.style.display="block";
                        loaded=true;
                    }
                    ps.style.width=lo.style.width=w+"px";
                    ps.style.height=lo.style.height=h+"px";
                    ps.style.left=lo.style.left="0px";
                    ps.style.top=lo.style.top="0px";
                    lo.style.transform=lo.style.webkitTransform="rotate(0deg)";
                    ps.style.transform=ps.style.webkitTransform="rotate(0deg)";
                }
            }
        },100);
    }
}
var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;


// 预加载逻辑
window.onload=function(){
    manifest = [
        {src: 'asset/audio/enter.mp3', id: 'sona1'},
        {src: 'asset/audio/out.mp3', id: 'sona2'},
        {src: 'asset/audio/right.mp3', id: 'sona3'},
        {src: 'asset/audio/running.mp3', id: 'sona4'},
        {src: 'asset/audio/start.mp3', id: 'sona5'},
        {src: 'asset/audio/wrong.mp3', id: 'sona6'},
        {src: 'asset/font/timing-light.TTF', id: 'font1'},
        {src: 'asset/font/writing-light.TTF', id: 'font2'},

        {src: 'images/page1/bg.png', id: 'p11'},
        {src: 'images/page1/btn.png', id: 'p12'},
        {src: 'images/page1/bubble.png', id: 'p13'},
        {src: 'images/page1/fbg.png', id: 'p14'},
        {src: 'images/page1/hint.png', id: 'p15'},
        {src: 'images/page1/title.png', id: 'p16'},

        {src: 'images/page2/bg.png', id: 'p21'},
        {src: 'images/page2/fbg.png', id: 'p22'},
        {src: 'images/page2/snow.png', id: 'p22'},

        {src: 'images/page3/bg.png', id: 'p31'},
        {src: 'images/page3/bg2.png', id: 'p32'},
        {src: 'images/page3/cloud.png', id: 'p33'},
        {src: 'images/page3/fbg.png', id: 'p34'},
        {src: 'images/page3/signal.png', id: 'p35'},

        {src: 'images/page4/bg.png', id: 'p41'},
        {src: 'images/page4/fbg.png', id: 'p42'},
        {src: 'images/page4/heart.png', id: 'p43'},

        {src: 'images/page5/bg.png', id: 'p51'},
        {src: 'images/page5/fbg.png', id: 'p52'},
        {src: 'images/page5/flower.png', id: 'p53'},
        {src: 'images/page5/money.png', id: 'p54'},

        {src: 'images/page6/bg.png', id: 'p61'},
        {src: 'images/page6/fbg.png', id: 'p62'},
        {src: 'images/page6/flag.png', id: 'p63'},
        {src: 'images/page6/solgan1.png', id: 'p64'},
        {src: 'images/page6/solgan2.png', id: 'p65'},

        {src: 'images/page7/bg.png', id: 'p71'},
        {src: 'images/page7/border1.png', id: 'p72'},
        {src: 'images/page7/share.png', id: 'p73'},
        {src: 'images/page7/btn1.png', id: 'p74'},
        {src: 'images/page7/btn2.png', id: 'p75'},
        {src: 'images/page7/btn3.png', id: 'p76'},

        {src: 'images/railway.png', id: 'p1'},
        {src: 'images/timer.png', id: 'p2'},
        {src: 'images/train.png', id: 'p3'},

    ];//预加载
    loader = new createjs.LoadQueue(false);
    // 关键！----设置并发数
    loader.setMaxConnections(100);
// 关键！---一定要将其设置为 true, 否则不起作用。
    loader.maintainScriptOrder=true;
    loader.installPlugin(createjs.Sound);
    loader.addEventListener('complete', handleComplete);//加载完成 调用handleComplete函数
    loader.addEventListener('progress', handleFileProgress);//加载完成 调用handleFileProgress函数
    loader.loadManifest(manifest);
}

function handleFileProgress(event){//加载中函数
    var percent=loader.progress*100|0+'%';
    document.getElementById('loadPercent').innerHTML=percent+"%";
    // $("#loadPercent").HTML=loader.progress%100|0+'%';
    console.log(loader.progress*100|0+'%');
}

function handleComplete(){
    // 显示下一张图
    $('#pageLoad').hide();
    $('#page1').show();
    playStart();
    bubble();
    train1In();
}



$(function () {
    //page1
    $("#hint").tap(function(){
        $("#hint").hide();
        $("#title").addClass('mainIn');
        $("#startBtn").addClass('mainIn');
    });

    $("#startBtn").tap(function () {
        console.log()
        playRun();
        train1Out();
    });


    //page2
    //page3
    //page4
    //page5
    $('#key50').tap(function(){
        quiz5(0);
    });
    $('#key51').tap(function(){
       quiz5(1);
   });
    $('#key52').tap(function(){
        quiz5(2);
    });
    $('#key53').tap(function(){
        quiz5(3);
    });
    $('#key54').tap(function(){
        quiz5(4);
    });
    $('#key55').tap(function(){
        quiz5(5);
    });
    $('#key56').tap(function(){
        quiz5(6);
    });
    $('#key57').tap(function(){
        quiz5(7);
    });
    $('#key58').tap(function(){
        quiz5(8);
    });
    $('#key59').tap(function(){
        quiz5(9);
    });

});



//page1 实验性的动效
var bubbleStage,
    bubbleCanvas,
    bubbleContainer;
bubbleCanvas=document.getElementById('bubble');
function bubble(){
    bubbleStage = new createjs.Stage(bubbleCanvas);//创建舞台
    bubbleContainer= new createjs.Container();
    bubbleStage.addChild(bubbleContainer);
    bubbleStage.canvas.height=w;
    bubbleStage.canvas.width=h;
    var data ={
        framerate:1,
        images:['./images/page1/bubble.png'],
        frames:{
            width:1206,
            height:750,
            count:3
        },
        animations:{
            anim : [0,2,'anim']
        }

    };

    var spriteSheet2 = new createjs.SpriteSheet(data);
    var img1 = new createjs.Sprite(spriteSheet2, 'anim');

    img1.set({x:0,y:0,scaleX: h/1206,scaleY:w/750 });
    bubbleContainer.addChild(img1);

    // createjs.Ticker.setFPS(30);
    createjs.Ticker.on('tick',bubbleStage);
}

var  stage1=new createjs.Stage("canvas1");

function train1In() {

    stage1.canvas.width=h;
    stage1.canvas.height=w;

    /*图片适配比例*/
    var original = w*0.275;
    var scale = original/203;
    var positonY=0.54*w;

    train.scaleX=scale;
    train.scaleY=scale;
    railway.scaleY=scale;

//设置在舞台中的位置
    train.x=1000;
    train.y=positonY;
    railway.y=positonY;
// 把动画放到舞台上，创建一个间隔事件侦听，进行动画
    stage1.addChild(railway);
    stage1.addChild(train);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.on('tick',stage1);
    createjs.Tween.get(train, {loop: false})
        .to({x: 250}, 8000, createjs.Ease.getPowInOut(4)).call(handleComplete);
    function handleComplete() {
        $("#hint").show();
    }

}
function train1Out(){
    createjs.Tween.get(train, {loop: false})
        .to({x: -2000}, 8000, createjs.Ease.getPowInOut(4)).call(handleComplete);
    function handleComplete() {
        $("#page1").hide();
        $("#page2").show();
        playEnter();
    }
    }

//page2 实验性的动效
var img,snowStage,
    snowCanvas,
    snowContainer;
    snowCanvas=document.getElementById('animCanvas');

function snow(){
    snowStage = new createjs.Stage(snowCanvas);//创建舞台
    snowContainer= new createjs.Container();
    snowStage.addChild(snowContainer);
    snowStage.canvas.height=w;
    snowStage.canvas.width=h;

    var data ={
        images:['./images/page2/snow.png'],
        frames:{
            width:1206,
            height:750,
            count:3
        },
        animations:{
            anim : [0,2,'anim']
        }

    };

    var spriteSheet2 = new createjs.SpriteSheet(data);
    var img1 = new createjs.Sprite(spriteSheet2, 'anim');

    img1.set({x:0,y:0,scaleX: h/1206,scaleY:w/750 });
    snowContainer.addChild(img1);

    createjs.Ticker.setFPS(2);
    createjs.Ticker.on('tick',snowStage);
}
snow();

//page3 实验性动效
var cloudStage,
    cloudCanvas,
    cloudContainer;
cloudCanvas=document.getElementById('cloud');

function cloud(){
    cloudStage = new createjs.Stage(cloudCanvas);//创建舞台
    cloudContainer= new createjs.Container();
    cloudStage.addChild(cloudContainer);
    cloudStage.canvas.height=w;
    cloudStage.canvas.width=h;

    var data ={
        images:['./images/page3/cloud.png'],
        frames:{
            width:1206,
            height:750,
            count:3
        },
        animations:{
            anim : [0,2,'anim']
        }

    };

    var spriteSheet2 = new createjs.SpriteSheet(data);
    var img1 = new createjs.Sprite(spriteSheet2, 'anim');

    img1.set({x:0,y:0,scaleX: h/1206,scaleY:w/750 });
    cloudContainer.addChild(img1);

    createjs.Ticker.setFPS(2);
    createjs.Ticker.on('tick',cloudStage);
}
cloud();

var signalStage,
    signalCanvas,
    signalContainer;
signalCanvas=document.getElementById('signal');

function signal(){
    signalStage = new createjs.Stage(signalCanvas);//创建舞台
    signalContainer= new createjs.Container();
    signalStage.addChild(signalContainer);
    signalStage.canvas.height=w;
    signalStage.canvas.width=h;

    var data ={
        images:['./images/page3/signal.png'],
        frames:{
            width:1206,
            height:750,
            count:6
        },
        animations:{
            anim : [0,5,'anim']
        }

    };

    var spriteSheet2 = new createjs.SpriteSheet(data);
    var img1 = new createjs.Sprite(spriteSheet2, 'anim');

    img1.set({x:0,y:0,scaleX: h/1206,scaleY:w/750 });
    signalContainer.addChild(img1);

    createjs.Ticker.setFPS(10);
    createjs.Ticker.on('tick',signalStage);
}
signal();

//page4 背景动效
var heartStage,
    heartCanvas,
    heartContainer;
heartCanvas=document.getElementById('heart');
function heart(){

    heartStage = new createjs.Stage(heartCanvas);//创建舞台
    heartContainer= new createjs.Container();
    heartStage.addChild(heartContainer);



    heartStage.canvas.width=h;
    heartStage.canvas.height=w;


    var data ={
        images:['./images/page4/heart.png'],
        frames:{
            width:1206,
            height:750,
            count:3
        },
        animations:{
            anim : [0,2,'anim']
        }

    };

    var spriteSheet2 = new createjs.SpriteSheet(data);
    var img1 = new createjs.Sprite(spriteSheet2, 'anim');

    img1.set({x:0,y:0,scaleX: h/1206,scaleY:w/750 });
    heartContainer.addChild(img1);

    createjs.Ticker.setFPS(2);
    createjs.Ticker.on('tick',heartStage);
}
heart();

//page5 背景动效
var flowerStage,
    flowerCanvas,
    flowerContainer;
flowerCanvas=document.getElementById('flower');
function flower(canvas){

    flowerStage = new createjs.Stage(canvas);//创建舞台
    flowerContainer= new createjs.Container();
    flowerStage.addChild(flowerContainer);

    flowerStage.canvas.width=h;
    flowerStage.canvas.height=w;

    var data ={
        framerate:2,
        images:['./images/page5/flower.png'],
        frames:{
            width:1206,
            height:750,
            count:3
        },
        animations:{
            anim : [0,2,'anim']
        }

    };

    var spriteSheet2 = new createjs.SpriteSheet(data);
    var img1 = new createjs.Sprite(spriteSheet2, 'anim');

    img1.set({x:0,y:0,scaleX: h/1206,scaleY:w/750 });
    flowerContainer.addChild(img1);

    // createjs.Ticker.setFPS(1);
    createjs.Ticker.on('tick',flowerStage);
}
flower(flowerCanvas);

var moneyStage,
    moneyCanvas,
    moneyContainer;
moneyCanvas=document.getElementById('money');
function money(canvas,path){

    moneyStage = new createjs.Stage(canvas);//创建舞台
    moneyContainer= new createjs.Container();
    moneyStage.addChild(moneyContainer);

    moneyStage.canvas.width=h;
    moneyStage.canvas.height=w;

    var data ={
        framerate:2,
        images:[path],
        frames:{
            width:1206,
            height:750,
            count:2
        },
        animations:{
            anim : [0,1,'anim']
        }

    };

    var spriteSheet2 = new createjs.SpriteSheet(data);
    var img1 = new createjs.Sprite(spriteSheet2, 'anim');

    img1.set({x:0,y:0,scaleX: h/1206,scaleY:w/750 });
    moneyContainer.addChild(img1);

    // createjs.Ticker.setFPS(1);
    createjs.Ticker.on('tick',moneyStage);
}
money(moneyCanvas,'./images/page5/money.png');

//page6 动效处理

var flowerCanvas2=document.getElementById('flower2');
flower(flowerCanvas2);
var moneyCanvas2=document.getElementById('money2');
money(moneyCanvas2,'./images/page6/money.png');



//火车的动效
var train= new createjs.Bitmap("./images/train.png");
var railway = new createjs.Bitmap("./images/railway.png");
var  stage5=new createjs.Stage("canvas");

var Title51= new createjs.Bitmap("./images/page5/title1.png");
var Title52= new createjs.Bitmap("./images/page5/title2.png");
var Title51_r= new createjs.Bitmap("./images/page5/title1_r.png");
var Title52_r= new createjs.Bitmap("./images/page5/title2_r.png");



function trainIn(stage,Title1,Title2,Title1_r,Title2_r) {
    stage.canvas.width=h;
    stage.canvas.height=w;
    /*图片适配比例*/
    var original = w*0.275;
    var scale = original/203;
    var positonY=0.489*w;

    train.scaleX=scale;
    train.scaleY=scale;
    Title1.scaleX=scale;
    Title1.scaleY=scale;
    Title2.scaleX=scale;
    Title2.scaleY=scale;

    Title1_r.scaleX=scale;
    Title1_r.scaleY=scale;
    Title2_r.scaleX=scale;
    Title2_r.scaleY=scale;

    Title1_r.visible=false;
    Title2_r.visible=false;

    railway.scaleY=scale;

//设置在舞台中的位置
    train.x=1000;
    train.y=positonY;

    Title1.x=1000;
    Title1.y=positonY;
    Title2.x=1000;
    Title2.y=positonY;

    Title1_r.x=1000;
    Title1_r.y=positonY;
    Title2_r.x=1000;
    Title2_r.y=positonY;

    railway.y=positonY;
// 把动画放到舞台上，创建一个间隔事件侦听，进行动画
    stage5.addChild(railway);
    stage5.addChild(train);
    stage5.addChild(Title1_r);
    stage5.addChild(Title2_r);
    stage5.addChild(Title1);
    stage5.addChild(Title2);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.on('tick',stage5);

    createjs.Tween.get(train, {loop: false})
        .to({x: 150}, 5000, createjs.Ease.getPowInOut(4)).call(handleComplete).call(enterFun);

    function enterFun() {
        playEnter();
    }

    createjs.Tween.get(Title1, {loop: false})
        .to({x: 150}, 5000, createjs.Ease.getPowInOut(4)).call(handleComplete);
    function handleComplete() {
        // 开始计时逻辑，题目显示逻辑
        $('.keys').show();
        console.log("finished");
    }

    createjs.Tween.get(Title2, {loop: false})
        .to({x: 150}, 5000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title1_r, {loop: false})
        .to({x: 150}, 5000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title2_r, {loop: false})
        .to({x: 150}, 5000, createjs.Ease.getPowInOut(4));


}
// trainIn(stage5,Title51,Title52,Title51_r,Title52_r);
function trainOut(Title1,Title2,Title1_r,Title2_r) {

    console.log("Train is going to leave");
    playOut();

    createjs.Tween.get(train, {loop: false})
        .to({x: -1500}, 5000, createjs.Ease.getPowInOut(4)).call(myFunction);
    function myFunction() {
        playOut();
    }
    createjs.Tween.get(Title1, {loop: false})
        .to({x: -1500}, 5000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title2, {loop: false})
        .to({x: -1500}, 5000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title1_r, {loop: false})
        .to({x: -1500}, 5000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title2_r, {loop: false})
        .to({x: -1500}, 5000, createjs.Ease.getPowInOut(4)).call(handleComplete);
    function handleComplete() {
        $("#page5").hide();
        $("#page6").show();

    }

}


//The passcode to check against.
var password_shijie=[0,8,8,0,7,8,4,0,8,0,6,3,6,8];//4
var password_zaibian=[9,8,1,9,1,9,6,9,1,1,7,6,5,2];//5
var password_chuangxin=[0,6,7,2,8,1,0,0,4,5];//4
var password_bubian = [6,8,9,2,2,6,9,9,3,2,4,0];
var enteredPass = [];

function quiz5(a) {
    var Choice = $('#key5'+a).attr('data-choice');
    console.log("点击的choice："+Choice);;
    enteredPass.push(Choice);
    console.log("enterPass的长度："+enteredPass.length);
   checkPasscode('#key5',password_bubian,3,Title51,Title52,Title51_r,Title52_r);
};

/*拼写的规则*/
var booleanArr = [];
function checkPasscode(key,password,num,Title1,Title2,Title1_r,Title2_r) {
    /*Runs through each of the password values. If the arrays match, it triggers the unlocked() function */
    if (enteredPass.length>password.length){
         return;
    }else{
        for(var i = 0; i<password.length;i++){
            if (enteredPass[i]==password[i]){
                booleanArr.push(true);
                if (i==num){
                    Title1.visible=false;
                    Title1_r.visible=true;
                }
                else if(i==password.length-1){
                    Title2.visible=false;
                    Title2_r.visible=true;
                    trainOut(Title1,Title2,Title1_r,Title2_r);
                }else{

                }
            }else{

                booleanArr.push(false);
            }
        }
    }

    if(enteredPass.length>0 ){
        console.log("enteredPass里面开始有内容的时候："+booleanArr);
        console.log("当前指针对应的boolean值是："+booleanArr[enteredPass.length-1]+"");
        if (booleanArr[enteredPass.length-1]){
            checkRight(key+enteredPass[enteredPass.length-1]);
        }else {
            checkWrong(key+enteredPass[enteredPass.length-1]);
            enteredPass.pop();
        }
        //需要清空，重新加入新的遍历array
        booleanArr=[];
    }else{
    }

    console.log("enteredPass的状态："+enteredPass);

}

function checkRight(key){
    playRight();
    $(key+'_r').show();
    setTimeout(function () {
        $(key+'_r').hide();
    },100);
    console.log(key+'_r');
}

function checkWrong(key){
    playWrong();
    $(key+'_w').show();
    setTimeout(function () {
        $(key+'_w').hide();
    },100);
    console.log(key+'_w');
}



/*Displays all the correct stuff, then moves on to homeScreen()*/


function resetAll() {
    Title1.visible=true;
    Title1_r.visible=false;

    Title2.visible=true;
    Title2_r.visible=false;
    enteredPass = [];
    console.log("清零了请重新输入");
}

//声音文件的播放方法
function playWrong() {
    createjs.Sound.registerSound({src:"asset/audio/wrong.mp3", id:"wrong"});
    createjs.Sound.play("wrong");
}

function playRight(){
    createjs.Sound.registerSound({src:"asset/audio/right.mp3", id:"right"});
    createjs.Sound.play("right");
}
function playOut() {
    createjs.Sound.registerSound({src:"asset/audio/out.mp3", id:"out"});
    createjs.Sound.play("out");
}

function playEnter() {
    createjs.Sound.registerSound({src:"asset/audio/enter.mp3", id:"enter"});
    createjs.Sound.play("enter");
}
function playStart() {
    createjs.Sound.registerSound({src:"asset/audio/start.mp3", id:"start"});
    createjs.Sound.play("start");
}
function playRun(){
    createjs.Sound.registerSound({src:"asset/audio/running.mp3", id:"run"});
    createjs.Sound.play("run");
}
