//the logic going here

function Sound (src,loop){
    this.src = src;
    this.loop = loop;
    this.audio;
}

Sound.prototype.render = function () {
    this.audio = new Audio();
    this.audio.loop = this.loop;
    this.audio.src = this.src;
    document.body.prepend(this.audio);
};

Sound.prototype.play = function () {
    console.log("sound play is triggered");
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {  // IOS
        WeixinJSBridge.invoke('getNetworkType', {}, function (res) {

            this.audio.play();
        });
    }else{  // Android
        this.audio.play();
    }
};



///////////////////////Instantiate Objects/////////////////////////////
var audio_wrong = new Audio("asset/audio/wrong.mp3","wrong"),
    audio_right = new Audio("asset/audio/right.mp3", "right"),
    audio_out = new Audio("asset/audio/out.mp3", "out"),
    audio_start = new Sound("asset/audio/start.mp3", false),
    audio_run = new Audio("asset/audio/running.mp3", "run"),
    audio_bg = new Sound('asset/audio/bg.mp3',"bg");

audio_start.render();
//audio_start.play();
// (function () {
//     audio_bg.render();
//     audio_start.render();
//
// })();

$("body").tap(function(){
    console.log('body on click');
    //audio_bg.Play();
    audio_start.play();
});