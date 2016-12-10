wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'checkJsApi',
        'onMenuShareTimeline',//
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'

    ]
});

/*
var url="http://weixin.assemblemedia.cn/founder/"

window.share_config = {
    "share": {
        "imgUrl": url+"images/shareIcon.jpg",//分享图，默认当相对路径处理，所以使用绝对路径的的话，“http://”协议前缀必须在。
        "desc" : "您一共使用了"+window.minute+"分"+window.second+"秒到达春天！",//摘要,如果分享到朋友圈的话，不显示摘要。
        "title" : '车票无限供应！开往春天的方正号！',//分享卡片标题
        "link": window.location.href,//分享出去后的链接，这里可以将链接设置为另一个页面。
        "success":function(){//分享成功后的回调函数
        },
        'cancel': function () {
            // 用户取消分享后执行的回调函数
        }
    }
};
wx.ready(function () {
    wx.onMenuShareAppMessage(share_config.share);//分享给好友
    wx.onMenuShareTimeline(share_config.share);//分享到朋友圈
    wx.onMenuShareQQ(share_config.share);//分享给手机QQ
});*/
