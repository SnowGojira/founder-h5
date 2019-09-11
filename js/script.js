
/**todo
 * 1. When the Timer started, the timer count shows 'NaN
 * 2. In my logic the script only need to control the UI
 *    So Timer need to be setted in engine.js as an util
 * */
// Timer
    let minute,
        time,
        second;
    window.minute=0;
    window.second=0;
    window.time=0;

    let int;

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

// 预加载逻辑

window.onload = preload(handleFileProgress,handleComplete);

/**
 * About autoplay BGM:
 * The latest Chrome policy have forbidden this action.
 * The solution is Using a button to trigger.
 * For the future: Need to be discussed with customers first.
 */

function handleFileProgress(){
    let percent=loader.progress*100|0+'%';
    $('loadPercent').innerHTML=percent+"%";
}

function handleComplete(){

    Hide(['#pageLoad']);
    $('#pageStage').show();
    //frontScene1In();
    //Scene1In();
    bubble_anim.render();
    front_scene.render();
    back_scene.render();
    speed_train.render();

    speed_train.update(train_loc_1,()=>{
        $("#hint").show();
    });
}

//events' logic
$(function () {
    //page1 start page
    $("#hint").on('click', function () {
        Hide(["#hint"]);
        audio_run.play();
        speed_train.update(train_loc_2, ()=> {
            $("#title").addClass('mainIn');
            $("#startBtn").addClass('mainIn');
        });
    });

    $("#startBtn").on('click', function () {
        /*console.log()*/
        Hide([".page1float","#bubble"]);
        audio_out.play();

        front_scene.update(front_loc_1);
        back_scene.update(back_loc_1);

        speed_train.update(train_loc_3,()=>{
            snow_anim.render();
            $('.timer').show();
            $('.keys2').addClass('mainIn');

            startTimer();
        });

        // topic means the quiz on the train
        topic1.render();
        topic1.Enter(8000);
    });

    //page2-5 quiz page
    $('.key').on('click',function(e){
        let id_str = $(this).attr("id").split(''),
            sec_id = id_str[3],
            key_id = id_str[4],
            arrTitle, password,procedure;

        if(sec_id == 2) {
            password = password2;
            arrTitle = arrTitle2;
            procedure = function(){
                topic1.Leave(function () {
                    $('#title1').hide();
                    topic2.render();
                    topic2.Enter(3000);
                });

                speed_train.update(train_loc_4,()=>{
                    startTimer();
                    $('.keys3').addClass('mainIn');
                });
                Scene3In();
                frontScene3In();
                // train3In();
            }
        }else if(sec_id == 3) {
            password = password3;
            arrTitle = arrTitle3;
            procedure = function () {
                speed_train.update(train_loc_4,()=>{
                    startTimer();
                    $('.keys4').addClass('mainIn');
                });

                title2Out();
                Scene4In();
                frontScene4In();
                // train4In();
            }
        }else if(sec_id == 4) {
            password = password4;
            arrTitle = arrTitle4;
            procedure = function () {
                speed_train.update(train_loc_4, () => {
                    startTimer();
                    $('.keys5').addClass('mainIn');
                });
                title3Out();
                Scene5In();
                frontScene5In();
                // train5In();
            }
        }else if(sec_id == 5) {
            password = password5;
            arrTitle = arrTitle5;
            procedure = function () {
                speed_train.update(train_loc_5,() =>{
                    $('#flag').addClass('mainIn');
                    $('#slogan1').addClass('mainIn');

                    setTimeout(function () {
                        $('#slogan1').removeClass('mainIn');
                        $('#slogan1').addClass('fadeOut');

                        $('#slogan2').addClass('mainIn');
                        $('#check').addClass('mainIn');
                    },5000);
                });
                title4Out();
                Scene6In();
                frontScene6In();
                // train6In();
            }
        }

        // console.log('first password',password);
        // console.log('first arrTitle',arrTitle);

        parseQuiz(sec_id,key_id,password,arrTitle,procedure);

    });


    //page6 result page
    $('#checkBtn').on('click', function () {
        // console.log("checkBtn查看按钮被激发。");

        Hide(['#slogan1','#slogan2','#flag','#check']);
        $('#page7').show();
        myAudio.pause();
        document.getElementById("secResult").innerHTML = second + "";
        document.getElementById("minResult").innerHTML = minute + "";


    });


    //page7 share page
    $('#wxShare').on('click', function () {
        $('#share').show();
    });
    $('#share').on('click', function () {
        $('#share').hide();
    });
    $('#founder').on('click', function () {
        // console.log("founder被激发");
        window.location.href = 'http://www.founder.com';
    });
    $('#retry').on('click', function () {
        // console.log("retry被激发");
        window.location.href = 'index.html';
    })
});


    /*****************************************火车的动效*********************************/
    // var w = document.documentElement.clientWidth,
    //     h = document.documentElement.clientHeight;
//刷帧的帧率
    //var ratio=60;
    var train= new createjs.Bitmap("./images/train.png");
    var railway = new createjs.Bitmap("./images/railway.png");
    /*火车在屏幕中的高度占比，和真实的火车像素高度*/
    // var original = w*0.275;
    // var scale = original/130;
    // var bgScaleY=h/750;
    // var bgScaleX=w/466;
    // var positonY=0.489*w;

//Initialize the 'Title' part


// 火车page1
    var  stage1=new createjs.Stage("canvas1");
    var  stage_bg1= new createjs.Stage('bg1');

    var  stage_fbg1= new createjs.Stage('fbg1');
// var  background1 = new createjs.Bitmap('./images/page1/bgt.png');
    var  background1 = new createjs.Bitmap('./images/page1/bgt1.png');
    var  frontgrond1 = new createjs.Bitmap('./images/page1/fbgt.png');


    function Scene2In() {

        createjs.Tween.get(background1, {loop: false})
            .to({x: -4*h}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            snow_anim.render();
        }
        // console.log("Scene2In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function Scene3In() {

        createjs.Tween.get(background1, {loop: false})
            .to({x: -3*h}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            cloud();
            signal();
        }
        // console.log("Scene3In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function Scene4In() {

        createjs.Tween.get(background1, {loop: false})
            .to({x: -2*h}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            heart();
        }
        // console.log("Scene4In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function Scene5In() {

        createjs.Tween.get(background1, {loop: false})
            .to({x: -h}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            money();
            // flower();
        }
        // console.log("Scene5In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function Scene6In() {
        createjs.Tween.get(background1, {loop: false})
            .to({x: 0}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            /*$('#flower').show();*/
            money2();
            // flower();
        }

        // console.log("Scene6In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }

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
    function frontScene2In() {
        //$(".page1float").hide();
        //$("#bubble").hide();
        createjs.Tween.get(frontgrond1, {loop: false})
            .to({x: -4*h}, 6000, createjs.Ease.getPowInOut(4));

        // console.log("frontScene2In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function frontScene3In() {
        $(".keys2").hide();
        $("#snow").hide();
        createjs.Tween.get(frontgrond1, {loop: false})
            .to({x: -3*h}, 6000, createjs.Ease.getPowInOut(4));

        // console.log("frontScene3In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function frontScene4In() {
        $(".keys3").hide();
        $("#signal").hide();
        $("#cloud").hide();
        createjs.Tween.get(frontgrond1, {loop: false})
            .to({x: -2*h}, 6000, createjs.Ease.getPowInOut(4));

        // console.log("frontScene4In 的帧率："+createjs.Ticker.getMeasuredFPS());

    }
    function frontScene5In() {
        $(".keys4").hide();
        $("#heart").hide();

        createjs.Tween.get(frontgrond1, {loop: false})
            .to({x: -h}, 6000, createjs.Ease.getPowInOut(4));

        // console.log("frontScene5In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function frontScene6In() {
        $(".keys5").hide();
        // $("#flower").hide();
        $("#money").hide();
        $(".timer").hide();



        console.log("前景6进入，timer隐藏："+minute+':'+second);
        createjs.Tween.get(frontgrond1, {loop: false})
            .to({x: 0}, 6000, createjs.Ease.getPowInOut(4));
        // console.log("frontScene2In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }


    // function train2In(){
    //     createjs.Tween.get(train, {loop: false})
    //         .to({x: -0.3*h}, 8000, createjs.Ease.getPowInOut(4)).call(handleComplete);
    //     function handleComplete() {
    //         // 第二页要显示的逻辑
    //         $('.timer').show();
    //         startTimer();
    //         $('.keys2').addClass('mainIn');
    //     }
    //     console.log("train2In 的帧率："+createjs.Ticker.getMeasuredFPS());
    // }
    function train3In(){
        createjs.Tween.get(train, {loop: false})
            .to({x: -0.9*h-50}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            // 第三页要显示的逻辑
            // signal();

        }

        console.log("train3In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function train4In(){
        createjs.Tween.get(train, {loop: false})
            .to({x: -0.9*h-50}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            // 第四页要显示的逻辑
            startTimer();
            $('.keys4').addClass('mainIn');
        }

        console.log("train4In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function train5In(){
        createjs.Tween.get(train, {loop: false})
            .to({x: -0.9*h-50}, 6000, createjs.Ease.getPowInOut(1)).call(handleComplete);
        function handleComplete() {
            // 第五页要显示的逻辑
            startTimer();
            $('.keys5').addClass('mainIn');
        }

        // console.log("train5In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
    function train6In(){
        createjs.Tween.get(train, {loop: false})
            .to({x: -3.5*h}, 8000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            // 第六页要显示的逻辑
            $('#flag').addClass('mainIn');
            $('#slogan1').addClass('mainIn');

            setTimeout(function () {
                $('#slogan1').removeClass('mainIn');
                $('#slogan1').addClass('fadeOut');

                $('#slogan2').addClass('mainIn');
                $('#check').addClass('mainIn');
            },5000);

        }

        // console.log("train6In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }

    // var  stageTitle1=new createjs.Stage("title1");
    var  stageTitle2=new createjs.Stage("title2");
    var  stageTitle3=new createjs.Stage("title3");
    var  stageTitle4=new createjs.Stage("title4");
//stage和handle函数要注意避免毁掉错误
//     function title1In() {
//         stageTitle1.canvas.width=h;
//         stageTitle1.canvas.height=w;
//
//         initTitle(arrTitle2,stageTitle1);
//         createjs.Ticker.setFPS(ratio);
//         createjs.Ticker.on('tick',stageTitle1);
//         TweenIn1Title(arrTitle2);
//     }
    function title1Out() {
        // console.log("title1out 被调用");

        TweenOutTitle(arrTitle2);
        createjs.Tween.get(arrTitle2[14], {loop: false})
            .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function  handleComplete() {
            $('#title1').hide();
            title2In();
        }
    }
    function title2In(){
        stageTitle2.canvas.width=h;
        stageTitle2.canvas.height=w;

        initTitle(arrTitle3,stageTitle2);
        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',stageTitle2);
        TweenInTitle(arrTitle3);
    }
    function title2Out() {
        TweenOutTitle(arrTitle3);
        createjs.Tween.get(arrTitle3[14], {loop: false})
            .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function  handleComplete() {
            $('#title2').hide();
            title3In();
        }
    }
    function title3In(){
        stageTitle3.canvas.width=h;
        stageTitle3.canvas.height=w;

        initTitle(arrTitle4,stageTitle3);
        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',stageTitle3);
        TweenInTitle(arrTitle4);
    }
    function title3Out() {
        TweenOutTitle(arrTitle4);
        createjs.Tween.get(arrTitle4[10], {loop: false})
            .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function  handleComplete() {
            $('#title3').hide();
            title4In();
        }
    }
    function title4In(){
        stageTitle4.canvas.width=h;
        stageTitle4.canvas.height=w;

        initTitle(arrTitle5,stageTitle4);
        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',stageTitle4);
        TweenInTitle(arrTitle5);
    }
    function title4Out() {
        TweenOutTitle(arrTitle5);
        createjs.Tween.get(arrTitle5[12], {loop: false})
            .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function  handleComplete() {
            $('#title4').hide();
        }
    }
    /**
     * Title 的通用函数*/
    function initTitle(arr,stage){
        for(var i=0;i<arr.length;i++){
            arr[i].scaleX=scale*1.2;
            arr[i].scaleY=scale*1.2;

            i==0?arr[i].visible=true:arr[i].visible=false;

            arr[i].x=h;
            arr[i].y=positonY*0.95;
            stage.addChild(arr[i]);
        }
    }

    function TweenIn1Title(arr){
        for(var i=0;i<arr.length;i++){
            createjs.Tween.get(arr[i], {loop: false})
                .to({x: h*0.42}, 8000, createjs.Ease.getPowInOut(4));
        }
    }
    function TweenInTitle(arr){
        for(var i=0;i<arr.length;i++){
            createjs.Tween.get(arr[i], {loop: false})
                .to({x: h*0.42}, 3000, createjs.Ease.getPowInOut(4));
        }
    }

    function TweenOutTitle(arr){
        for(var i=0;i<arr.length-1;i++){
            createjs.Tween.get(arr[i], {loop: false})
                .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4));
        }
    }

    /*****************************************背景动效*********************************/


//page3 实验性动效
    var cloudStage,
        cloudCanvas,
        cloudContainer;
    cloudCanvas=document.getElementById('cloud');
    function cloud(){
        // console.log("cloud创建");
        cloudStage = new createjs.Stage(cloudCanvas);//创建舞台
        cloudContainer= new createjs.Container();
        cloudStage.addChild(cloudContainer);
        cloudStage.canvas.height=w;
        cloudStage.canvas.width=h;

        var data ={
            framerate:1,
            images:['./images/page3/cloud.png'],
            frames:{
                width:750,
                height:466,
                count:3
            },
            animations:{
                anim : [0,2,'anim']
            }

        };

        var spriteSheet2 = new createjs.SpriteSheet(data);
        var img1 = new createjs.Sprite(spriteSheet2, 'anim');

        img1.set({x:0,y:0,scaleX: h/750,scaleY:w/466 });
        cloudContainer.addChild(img1);
        // createjs.Ticker.setFPS(2);
        createjs.Ticker.on('tick',cloudStage);
    }

    var signalStage,
        signalCanvas,
        signalContainer;
    signalCanvas=document.getElementById('signal');
    function signal(){
        // console.log("signal 创建");
        signalStage = new createjs.Stage(signalCanvas);//创建舞台
        signalContainer= new createjs.Container();
        signalStage.addChild(signalContainer);
        signalStage.canvas.height=w;
        signalStage.canvas.width=h;

        var data ={
            framerate:1,
            images:['./images/page3/signal.png'],
            frames:{
                width:750,
                height:466,
                count:30
            },
            animations:{
                anim : [0,1,2,3,4,5,
                    0,1,2,3,4,5,
                    0,1,2,3,4,5,
                    0,1,2,3,4,5,
                    0,1,2,3,4,5,
                    0,1,2,3,4,5]
            }

        };

        var spriteSheet2 = new createjs.SpriteSheet(data);
        var img1 = new createjs.Sprite(spriteSheet2, 'anim');

        img1.set({x:0,y:0,scaleX: h/750,scaleY:w/466 });
        signalContainer.addChild(img1);

        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',signalStage);
    }


//page4 背景动效
    var heartStage,
        heartCanvas,
        heartContainer;
    heartCanvas=document.getElementById('heart');
    function heart(){
        // console.log("heart 创建");
        heartStage = new createjs.Stage(heartCanvas);//创建舞台
        heartContainer= new createjs.Container();
        heartStage.addChild(heartContainer);

        heartStage.canvas.width=h;
        heartStage.canvas.height=w;

        var data ={
            framerate:2,
            images:['./images/page4/heart.png'],
            frames:{
                width:750,
                height:466,
                count:3
            },
            animations:{
                anim : [0,2,'anim']
            }

        };

        var spriteSheet2 = new createjs.SpriteSheet(data);
        var img1 = new createjs.Sprite(spriteSheet2, 'anim');

        img1.set({x:0,y:0,scaleX: h/750,scaleY:w/466 });
        heartContainer.addChild(img1);
        // createjs.Ticker.setFPS(2);
        createjs.Ticker.on('tick',heartStage);
    }


    var moneyStage,
        moneyCanvas,
        moneyContainer;
    function money(){
        moneyCanvas=document.getElementById('money');
        moneyStage = new createjs.Stage(moneyCanvas);//创建舞台
        moneyContainer= new createjs.Container();
        moneyStage.addChild(moneyContainer);
        moneyStage.canvas.width=h;
        moneyStage.canvas.height=w;

        var data ={
            framerate:2,
            images:['./images/page5/money.png'],
            frames:{
                width:750,
                height:466,
                count:2
            },
            animations:{
                anim : [0,1,'anim']
            }

        };
        var spriteSheet2 = new createjs.SpriteSheet(data);
        var img1 = new createjs.Sprite(spriteSheet2, 'anim');

        img1.set({x:0,y:0,scaleX: h/750,scaleY:w/466 });
        moneyContainer.addChild(img1);

        // createjs.Ticker.setFPS(1);
        createjs.Ticker.on('tick',moneyStage);
    }
    function money2(){
        var moneyCanvas2=document.getElementById('money2');
        moneyStage = new createjs.Stage(moneyCanvas2);//创建舞台
        moneyContainer= new createjs.Container();
        moneyStage.addChild(moneyContainer);
        moneyStage.canvas.width=h;
        moneyStage.canvas.height=w;

        var data ={
            framerate:2,
            images:['./images/page6/money.png'],
            frames:{
                width:750,
                height:466,
                count:2
            },
            animations:{
                anim : [0,1,'anim']
            }

        };
        var spriteSheet2 = new createjs.SpriteSheet(data);
        var img1 = new createjs.Sprite(spriteSheet2, 'anim');

        img1.set({x:0,y:0,scaleX: h/750,scaleY:w/466 });
        moneyContainer.addChild(img1);
        // createjs.Ticker.setFPS(1);
        createjs.Ticker.on('tick',moneyStage);
    }


/*****************************************题目逻辑*********************************/
    const password2 =[0,1,1,0,2,1,4,0,1,0,5,3,5,1],
          password3 =[4,3,1,4,1,4,6,4,1,1,5,6,0,2],
          password4 =[0,3,6,2,7,1,0,0,4,5],
          password5 = [6,5,1,2,2,6,1,1,3,2,4,0];

    let enteredPass = [],
        booleanArr = [];

    function parseQuiz(sec_id,key_id,password,arr,cb) {

            let choice = $('#key'+sec_id+key_id).attr('data-choice'),
                key = '#key'+sec_id;

            enteredPass.push(choice);
            // console.log('enteredPass',enteredPass);
            // console.log('booleanArr',booleanArr);
            if (enteredPass.length <= password.length){
                for(var i = 0; i<password.length;i++){
                    if (enteredPass[i]==password[i]){
                        booleanArr.push(true);
                        VBTitleByNum(arr, i+1);
                        if(i == password.length-1) {
                            enteredPass = [];
                            audio_out.play();
                            stopTimer();

                            cb();
                        }
                    }else{
                        booleanArr.push(false);
                    }
                }
            }
            if(enteredPass.length>0 ){
                if (booleanArr[enteredPass.length-1]){
                    checkRight(key+enteredPass[enteredPass.length-1]);
                }else {
                    checkWrong(key+enteredPass[enteredPass.length-1]);
                    enteredPass.pop();
                }
                //需要清空，重新加入新的遍历array
                booleanArr=[];
            }


    }

    function VBTitleByNum(arr,num){
    for(var i=0;i<arr.length;i++){
        i==num?arr[i].visible=true:arr[i].visible=false;
    }
}

//todo sound did not play fluently.Has stubbed!
    function checkRight(key){
        audio_right.play()
        $(key+'_r').show();
        setTimeout(function () {
            $(key+'_r').hide();
        },100);
    }

    function checkWrong(key){
        audio_wrong.play();
        $(key+'_w').show();
        setTimeout(function () {
            $(key+'_w').hide();
        },100);
    }




