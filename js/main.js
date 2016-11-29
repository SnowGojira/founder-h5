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

// 预加载逻辑
var pageLoad = new Array(
    "images/train.png"
);

$(function () {
    // var sticker=new Array();
    //图片懒加载
    var aImagesIndex=0;

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

    });
});