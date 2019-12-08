(function () {
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


})();

// Timer
let minute,
    second;
window.minute=0;
window.second=0;
window.time=0;

let int,time = 0;

//Start the Timer
function startTimer () {
    int=setInterval(timer,1000);
}

//Timing
function timer () {
    time++;
    var second1 = time % 60;
    var minute1 = Math.floor(time / 60) % 60;

    second = (second1 < 10) ? '0'+second1 : second1;
    minute = (minute1 < 10) ? '0'+minute1 : minute1;

    document.getElementById('timer').innerHTML=minute+':'+second;
    // console.log(minute+":"+second);
};
//stop the timer
function stopTimer () {
    window.clearInterval(int);
}
//reset the timer
function resetTimer (){
    window.clearInterval(int);
    minute=second=0;
    document.getElementById('timer').innerHTML='00:00';
};


///**********************************微信分享的部分功能 **********************************/

/**
 * WeChat();为测试服代码
 * getWXconfig()为正式服，上到财新平台请屏蔽代码
 * 暂时不调用
 */
// window.addEventListener('load',function () {
//     WeChat();
//     //getWXConfig();
// });

function WeChat() {
    $.ajax(
        {type:'get',
            url:'ajax_getconfig.php',
            success:function(data){
                console.log("ajax success:"+data);
                console.log("ajax success:"+JSON.parse(data).appId);
                console.log("ajax success:"+JSON.parse(data).timestamp);
                console.log("ajax success:"+JSON.parse(data).nonceStr);
                console.log("ajax success:"+JSON.parse(data).signature);

                wx.config({
                    debug: false,
                    appId:JSON.parse(data).appId,
                    timestamp: JSON.parse(data).timestamp,
                    nonceStr: JSON.parse(data).nonceStr,
                    signature: JSON.parse(data).signature,
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'checkJsApi',
                        'onMenuShareTimeline',//
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'

                    ]
                });

            }
        });

}
/**
 * caixin wx
 * 上到服务器之前，注意检查debug:false,是否为false，
 * 如果需要调试开true会有弹框信息出现
 */
function getWXConfig(){
    $.getJSON("http://api.caixin.com/wxsdk/wxconfig.php?url=" + encodeURIComponent(window.location.href) + "&callback=?",function(data){
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","translateVoice","uploadVoice"]
        });
    });
}


function shareAjax(){
    /**
     * url需要更改为正式服务器的地址
     */
    var url="http://weixin.assemblemedia.cn/founder/";
    var imageUrl=url+"images/shareIcon.jpg";
    var sharetitle='车票无限供应！开往春天的方正号！';
    var sharedesc="您一共使用了"+window.minute+"分"+window.second+"秒到达春天!";
    var shareLink=url+'index.html';

    wx.ready(function(){
        wx.onMenuShareTimeline({
            title:sharetitle+sharedesc, // 分享标题
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: sharetitle, // 分享标题
            desc: sharedesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQQ({
            title: sharetitle, // 分享标题
            desc: sharedesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareWeibo({
            title: sharetitle, // 分享标题
            desc: sharedesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });

}