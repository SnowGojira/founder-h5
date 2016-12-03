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





var  stage5=new createjs.Stage("canvas");

var Title1= new createjs.Bitmap("./images/page5/title1.png");
var Title2= new createjs.Bitmap("./images/page5/title2.png");

var Title1_r= new createjs.Bitmap("./images/page5/title1_r.png");
var Title2_r= new createjs.Bitmap("./images/page5/title2_r.png");

function init() {

    stage5.canvas.width=h;
    stage5.canvas.height=w;

    /*图片适配比例*/
    var original = w*0.275;
    var scale = original/203;
    var positonY=0.489*w;
    // console.log(w+" "+original+" "+scale+" "+positonY);
    var train= new createjs.Bitmap("./images/train.png");
    var railway = new createjs.Bitmap("./images/railway.png");


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
        .to({x: 200}, 10000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title1, {loop: false})
        .to({x: 200}, 10000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title2, {loop: false})
        .to({x: 200}, 10000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title1_r, {loop: false})
        .to({x: 200}, 10000, createjs.Ease.getPowInOut(4));

    createjs.Tween.get(Title2_r, {loop: false})
        .to({x: 200}, 10000, createjs.Ease.getPowInOut(4));


}
init();

//The passcode to check against.
var password_bu = [6,8,9,2];
var password_bian = [2,6,9,9,3,2,4,0];
//The values that the user enters while attempting to unlock the phone
var enteredPass = [];
var isTitle1 = false;
var isTitle2 = false;

/*Functions to enter the numbers to enteredPass[]*/

function lock(a) {

    var Choice = $('#key5'+a).attr('data-choice');
    console.log("点击的choice："+Choice);
    enteredPass.push(Choice);
    console.log("enterPass的长度："+enteredPass.length);
    checkPasscode_bu('#key5',password_bu);
}


/*拼写的规则*/

var booleanArr = [];
function checkPasscode_bu(key,password) {
    /*Runs through each of the password values. If the arrays match, it triggers the unlocked() function */
    /*if(enteredPass.length>password.length){
        return;
    }*/

    if (enteredPass.length>password.length){
        resetAll();
    }else{
        for(var i = 0; i<password.length;i++){
            if (enteredPass[i]==password[i]){
                if(i==password.length-1){
                    unlocked();
                    // isTitle1=true;
                    booleanArr.push(true);
                }else{
                    // isTitle1=true;
                    booleanArr.push(true);
                }
            }else{
                // isTitle1=false;
                booleanArr.push(false);
            }
        }
    }

    if(enteredPass.length>0 ){
        console.log(booleanArr);
        console.log(booleanArr[enteredPass.length-1]+"");

        if (booleanArr[enteredPass.length-1]){
            checkRight(key+enteredPass[enteredPass.length-1]);
        }else {
            checkWrong(key+enteredPass[enteredPass.length-1]);
        }
        booleanArr=[];
    }else{

    }

    console.log(enteredPass);
    console.log(booleanArr);


}


function checkRight(key){
    $(key+'_r').show();
    setTimeout(function () {
        $(key+'_r').hide();
    },100);
    console.log(key+'_r');
}

function checkWrong(key){
    resetAll();
    $(key+'_w').show();
    setTimeout(function () {
        $(key+'_w').hide();
    },100);

    console.log(key+'_w');

}


/*Displays all the correct stuff, then moves on to homeScreen()*/

function unlocked() {
    Title1.visible=false;
    Title1_r.visible=true;
    console.log("Your Phone is Unlocked");

}

function resetAll() {
    enteredPass = [];
    console.log("清零了请重新输入");
}
