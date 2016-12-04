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

// pageLoading的动画问题

// 预加载逻辑
/*var pageLoad = new Array(
    "images/train.png"
);*/

$(function () {
    // var sticker=new Array();
    //图片懒加载
    /*var aImagesIndex=0;

    function loadImgs(arr,fn){
        var len  = arr.length,
            behginTime = new Date().getTime();
        aImagesIndex = 0;

        function loadImg(){
            var oImg = new Image(),
                flag = true;
            oImg.onload = function(){

                if(flag){
                    flag = false;
                    aImagesIndex ++;
                }
                if(aImagesIndex < len){
                    loadImg();
                }else{
                    var t = new Date().getTime() - behginTime;
                    if(t < 3000){//等待时间
                        setTimeout(function(){
                            fn && fn();
                        },3000-t);
                    }else{
                        fn && fn();
                    }
                }
            };
            // var img_src = arr[aImagesIndex];
            oImg.src = arr[aImagesIndex];
            document.getElementById("loadPercent").innerHTML=aImagesIndex*5+'%';
            console.log(document.getElementById("loadPercent").innerHTML);
        }
        loadImg();
    }

    loadImgs(pageLoad,function(){
        $('#pageLoad').hide();

        $('#page1').show();

    });*/


    /*开始做5页和第六页的大逻辑*/
    $('#key50').tap(function(){
        lock(0);
    });
    $('#key51').tap(function(){
       lock(1);
   });
    $('#key52').tap(function(){
        lock(2);
    });
    $('#key53').tap(function(){
        lock(3);
    });
    $('#key54').tap(function(){
        lock(4);
    });
    $('#key55').tap(function(){
        lock(5);
    });
    $('#key56').tap(function(){
        lock(6);
    });
    $('#key57').tap(function(){
        lock(7);
    });
    $('#key58').tap(function(){
        lock(8);
    });
    $('#key59').tap(function(){
        lock(9);
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
bubble();

var  stage1=new createjs.Stage("canvas1");

function train1In() {

    stage1.canvas.width=h;
    stage1.canvas.height=w;

    /*图片适配比例*/
    var original = w*0.275;
    var scale = original/203;
    var positonY=0.489*w;
    // console.log(w+" "+original+" "+scale+" "+positonY);
    var train= new createjs.Bitmap("./images/train.png");
    var railway = new createjs.Bitmap("./images/railway.png");


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

    createjs.Ticker.setFPS(30);
    createjs.Ticker.on('tick',stage1);
    createjs.Tween.get(train, {loop: false})
        .to({x: 200}, 10000, createjs.Ease.getPowInOut(4));

}
train1In();

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



var  stage5=new createjs.Stage("canvas");
var Title1= new createjs.Bitmap("./images/page5/title1.png");
var Title2= new createjs.Bitmap("./images/page5/title2.png");
var Title1_r= new createjs.Bitmap("./images/page5/title1_r.png");
var Title2_r= new createjs.Bitmap("./images/page5/title2_r.png");
var train= new createjs.Bitmap("./images/train.png");
var railway = new createjs.Bitmap("./images/railway.png");
var tweenTrain5;
var tweenTitle1_5;
var tweenTitle2_5;
var tweenTitle1_5_r;
var tweenTitle2_5_r;

function train5In() {

    stage5.canvas.width=h;
    stage5.canvas.height=w;
    /*图片适配比例*/
    var original = w*0.275;
    var scale = original/203;
    var positonY=0.489*w;
    // console.log(w+" "+original+" "+scale+" "+positonY);


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

    createjs.Ticker.setFPS(20);
    createjs.Ticker.on('tick',stage5);


    createjs.Sound.on("fileload", playEnter, this);
    tweenTrain5=createjs.Tween.get(train, {loop: false})
        .to({x: -5000}, 25000, createjs.Ease.getPowInOut(1));
    setTimeout(function () {
        tweenTrain5.setPaused(true);

    },3000);
    tweenTitle1_5=createjs.Tween.get(Title1, {loop: false})
        .to({x: 150}, 1000, createjs.Ease.getPowOut(4));

    tweenTitle2_5=createjs.Tween.get(Title2, {loop: false})
        .to({x: 150}, 1000, createjs.Ease.getPowOut(4));

    tweenTitle1_5_r=createjs.Tween.get(Title1_r, {loop: false})
        .to({x: 150}, 1000, createjs.Ease.getPowOut(4));

    tweenTitle2_5_r=createjs.Tween.get(Title2_r, {loop: false})
        .to({x: 150}, 1000, createjs.Ease.getPowOut(4));
}
train5In();

//page6 动效处理

var flowerCanvas2=document.getElementById('flower2');
flower(flowerCanvas2);
var moneyCanvas2=document.getElementById('money2');
money(moneyCanvas2,'./images/page6/money.png');

/*function handleComplete(){//加载完成调用函数
    var spriteSheet = new createjs.SpriteSheet({//创建精灵
        framerate: 60,
        'images': [loader.getResult('img')],
        'frames': {'regX':0, 'height':120, 'count':6, 'regY': 0, 'width': 120},
        'animations': {
            'anim': [0, 5, 'anim'],
        }
    });
    img = new createjs.Sprite(spriteSheet, 'anim');
    stage.addChild(img);//将img加载到舞台上
    createjs.Ticker.addEventListener('tick', tick);//刷新
    createjs.Ticker.setFPS(10); //每秒调用tick函数 3次 控制动画快慢
}

function handleFileProgress(event){//加载中函数
    console.log(loader.progress*100|0+'%');
}*/



//The passcode to check against.
var password_bubian = [6,8,9,2,2,6,9,9,3,2,4,0];
//The values that the user enters while attempting to unlock the phone
var enteredPass = [];

/*Functions to enter the numbers to enteredPass[]*/
function lock(a) {
    var Choice = $('#key5'+a).attr('data-choice');
    console.log("点击的choice："+Choice);
    enteredPass.push(Choice);
    console.log("enterPass的长度："+enteredPass.length);
    checkPasscode_bu('#key5',password_bubian);
}

/*拼写的规则*/
var booleanArr = [];
function checkPasscode_bu(key,password) {
    /*Runs through each of the password values. If the arrays match, it triggers the unlocked() function */

    if (enteredPass.length>password.length){
         return;
    }else{
        for(var i = 0; i<password.length;i++){
            if (enteredPass[i]==password[i]){
                booleanArr.push(true);
                if (i==3){
                    Title1.visible=false;
                    Title1_r.visible=true;
                }
                else if(i==password.length-1){
                    Title2.visible=false;
                    Title2_r.visible=true;
                    unlocked();

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
function unlocked() {
    console.log("Your Phone is Unlocked");
    setTimeout(function () {
        playOut();
    },10);
    createjs.Tween.get(train, {loop: false})
        .to({x: -10000}, 150, createjs.Ease.getPowOut(4));

    createjs.Tween.get(Title1, {loop: false})
        .to({x: -10000}, 150, createjs.Ease.getPowOut(4));

    createjs.Tween.get(Title2, {loop: false})
        .to({x: -10000}, 150, createjs.Ease.getPowOut(4));

    createjs.Tween.get(Title1_r, {loop: false})
        .to({x: -10000}, 150, createjs.Ease.getPowOut(4));

    createjs.Tween.get(Title2_r, {loop: false})
        .to({x: -10000}, 150, createjs.Ease.getPowOut(4));

}

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
    createjs.Sound.registerSound({src:"asset/audio/run.mp3", id:"run"});
    createjs.Sound.play("run");
}

function playCorrect() {
    createjs.Sound.registerSound({src:"asset/audio/correct.mp3", id:"correct"});
    createjs.Sound.play("correct");
}