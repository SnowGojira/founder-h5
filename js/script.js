
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
    //page1
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
        // title means the quiz on the train
        title1In();

    });

    //page2 quiz UI
    let quizPress2 = quizPress(2,10);

    quizPress2.forEach(e => { e()});
    // $('#key20').on('click', function () {
    //     // console.log('#key20 点击了');
    //     quiz2(0);
    // });
    // $('#key21').on('click', function () {
    //     quiz2(1);
    // });
    // $('#key22').on('click', function () {
    //     quiz2(2);
    // });
    // $('#key23').on('click', function () {
    //     quiz2(3);
    // });
    // $('#key24').on('click', function () {
    //     quiz2(4);
    // });
    // $('#key25').on('click', function () {
    //     quiz2(5);
    // });
    // $('#key26').on('click', function () {
    //     quiz2(6);
    // });
    // $('#key27').on('click', function () {
    //     quiz2(7);
    // });
    // $('#key28').on('click', function () {
    //     quiz2(8);
    // });
    // $('#key29').on('click', function () {
        quiz2(9);
    // });
    //page3
    $('.key').on('click',function(e){
        let id_str = $(this).attr("id").split(''),
            func_id = 'quiz'+id_str[3],
            value = id_str[4];
        func_id(value);
        console.log('id',func_id);
    });

    $('#key30').on('click', function () {
        // console.log('#key30 点击了');
        quiz3(0);
    });
    $('#key31').on('click', function () {
        quiz3(1);
    });
    $('#key32').on('click', function () {
        quiz3(2);
    });
    $('#key33').on('click', function () {
        quiz3(3);
    });
    $('#key34').on('click', function () {
        quiz3(4);
    });
    $('#key35').on('click', function () {
        quiz3(5);
    });
    $('#key36').on('click', function () {
        quiz3(6);
    });
    $('#key37').on('click', function () {
        quiz3(7);
    });
    $('#key38').on('click', function () {
        quiz3(8);
    });
    $('#key39').on('click', function () {
        quiz3(9);
    });

    //page4
    $('#key40').on('click', function () {
        // console.log("key40 背点击");
        quiz4(0);

    });
    $('#key41').on('click', function () {
        quiz4(1);
    });
    $('#key42').on('click', function () {
        quiz4(2);
    });
    $('#key43').on('click', function () {
        quiz4(3);
    });
    $('#key44').on('click', function () {
        quiz4(4);
    });
    $('#key45').on('click', function () {
        quiz4(5);
    });
    $('#key46').on('click', function () {
        quiz4(6);
    });
    $('#key47').on('click', function () {
        quiz4(7);
    });
    $('#key48').on('click', function () {
        quiz4(8);
    });
    $('#key49').on('click', function () {
        quiz4(9);
    });


    //page5
    $('#key50').on('click', function () {
        quiz5(0);
    });
    $('#key51').on('click', function () {
        quiz5(1);
    });
    $('#key52').on('click', function () {
        quiz5(2);
    });
    $('#key53').on('click', function () {
        quiz5(3);
    });
    $('#key54').on('click', function () {
        quiz5(4);
    });
    $('#key55').on('click', function () {
        quiz5(5);
    });
    $('#key56').on('click', function () {
        quiz5(6);
    });
    $('#key57').on('click', function () {
        quiz5(7);
    });
    $('#key58').on('click', function () {
        quiz5(8);
    });
    $('#key59').on('click', function () {
        quiz5(9);
    });

    $('#checkBtn').on('click', function () {
        // console.log("checkBtn查看按钮被激发。");
        // $('#slogan1').hide();
        // $('#slogan2').hide();
        // $('#flag').hide();
        // $('#check').hide();

        Hide(['#slogan1','#slogan2','#flag','#check']);
        $('#page7').show();
        myAudio.pause();
        document.getElementById("secResult").innerHTML = second + "";
        document.getElementById("minResult").innerHTML = minute + "";


    });


    //page7 logic
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
    const arrTitle1 = pushQuizPieces(14, 'title1'),
          arrTitle2 = pushQuizPieces(14, 'title2'),
          arrTitle3 = pushQuizPieces(10, 'title3'),
          arrTitle4 = pushQuizPieces(12, 'title4');
    //recurse the quiz; loop can be used as well.
    //Here I chose the readability over the proformance
    //Since the array is short.
    function pushQuizPieces(count,file_url,num=0,arr=[]){

        if(arr.length == count+1) return arr;

        var image = new createjs.Bitmap("./images/"+file_url+"/"+num+".png");
        arr.push(image);
        const new_num = num+1;

        return pushQuizPieces(count--,file_url,new_num,arr);
    }


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
            startTimer();
            $('.keys3').addClass('mainIn');
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

    var  stageTitle1=new createjs.Stage("title1");
    var  stageTitle2=new createjs.Stage("title2");
    var  stageTitle3=new createjs.Stage("title3");
    var  stageTitle4=new createjs.Stage("title4");
//stage和handle函数要注意避免毁掉错误
    function title1In() {
        stageTitle1.canvas.width=h;
        stageTitle1.canvas.height=w;

        initTitle(arrTitle1,stageTitle1);
        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',stageTitle1);
        TweenIn1Title(arrTitle1);
    }
    function title1Out() {
        // console.log("title1out 被调用");

        TweenOutTitle(arrTitle1);
        createjs.Tween.get(arrTitle1[14], {loop: false})
            .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function  handleComplete() {
            $('#title1').hide();
            title2In();
        }
    }
    function title2In(){
        stageTitle2.canvas.width=h;
        stageTitle2.canvas.height=w;

        initTitle(arrTitle2,stageTitle2);
        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',stageTitle2);
        TweenInTitle(arrTitle2);
    }
    function title2Out() {
        TweenOutTitle(arrTitle2);
        createjs.Tween.get(arrTitle2[14], {loop: false})
            .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function  handleComplete() {
            $('#title2').hide();
            title3In();
        }
    }
    function title3In(){
        stageTitle3.canvas.width=h;
        stageTitle3.canvas.height=w;

        initTitle(arrTitle3,stageTitle3);
        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',stageTitle3);
        TweenInTitle(arrTitle3);
    }
    function title3Out() {
        TweenOutTitle(arrTitle3);
        createjs.Tween.get(arrTitle3[10], {loop: false})
            .to({x: 1.2*h}, 3000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function  handleComplete() {
            $('#title3').hide();
            title4In();
        }
    }
    function title4In(){
        stageTitle4.canvas.width=h;
        stageTitle4.canvas.height=w;

        initTitle(arrTitle4,stageTitle4);
        createjs.Ticker.setFPS(ratio);
        createjs.Ticker.on('tick',stageTitle4);
        TweenInTitle(arrTitle4);
    }
    function title4Out() {
        TweenOutTitle(arrTitle4);
        createjs.Tween.get(arrTitle4[12], {loop: false})
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
//The passcode to check against.
    var password_shijie=[0,1,1,0,2,1,4,0,1,0,5,3,5,1];//4
    var password_zaibian=[4,3,1,4,1,4,6,4,1,1,5,6,0,2];//5
    var password_chuangxin=[0,3,6,2,7,1,0,0,4,5];//4
    var password_bubian = [6,5,1,2,2,6,1,1,3,2,4,0];
    var enteredPass2 = [];
    var enteredPass3 = [];
    var enteredPass4 = [];
    var enteredPass5 = [];

    function quiz(a) {
        var Choice = $('#key2'+a).attr('data-choice');
        enteredPass2.push(Choice);
        checkPasscode2('#key2',password_shijie,arrTitle1);
    }
    function quiz(sec, v){

    }
    function quiz3(a) {
        var Choice = $('#key3'+a).attr('data-choice');
        enteredPass3.push(Choice);
        checkPasscode3('#key3',password_zaibian,arrTitle2);
    }

    function quiz4(a) {
        var Choice = $('#key4'+a).attr('data-choice');
        enteredPass4.push(Choice);
        checkPasscode4('#key4',password_chuangxin,arrTitle3);
    }

    function quiz5(a) {
        var Choice = $('#key5'+a).attr('data-choice');
        enteredPass5.push(Choice);
        checkPasscode5('#key5',password_bubian,arrTitle4);
    }

    /*拼写的规则*/
    var booleanArr = [];


    function checkRight(key){
        playRight();
        $(key+'_r').show();
        setTimeout(function () {
            $(key+'_r').hide();
        },100);
    }

    function checkWrong(key){
        playWrong();
        $(key+'_w').show();
        setTimeout(function () {
            $(key+'_w').hide();
        },100);
    }

    /**
     *遍历将指定的题目变成可见的
     */
    function VBTitleByNum(arr,num){
        for(var i=0;i<arr.length;i++){
            i==num?arr[i].visible=true:arr[i].visible=false;
        }
    }

    function checkPasscode2(key,password,arr) {
        /*Runs through each of the password values. If the arrays match, it triggers the unlocked() function */
        if (enteredPass2.length>password.length){
            return;
        }else{
            for(var i = 0; i<password.length;i++){
                if (enteredPass2[i]==password[i]){
                    booleanArr.push(true);
                    switch (i){
                        case 0:
                            VBTitleByNum(arr,1);
                            break;
                        case 1:
                            VBTitleByNum(arr,2);
                            break;
                        case 2:
                            VBTitleByNum(arr,3);
                            break;
                        case 3:
                            VBTitleByNum(arr,4);
                            break;
                        case 4:
                            VBTitleByNum(arr,5);
                            break;
                        case 5:
                            VBTitleByNum(arr,6);
                            break;
                        case 6:
                            VBTitleByNum(arr,7);
                            break;
                        case 7:
                            VBTitleByNum(arr,8);
                            break;
                        case 8:
                            VBTitleByNum(arr,9);
                            break;
                        case 9:
                            VBTitleByNum(arr,10);
                            break;
                        case 10:
                            VBTitleByNum(arr,11);
                            break;
                        case 11:
                            VBTitleByNum(arr,12);
                            break;
                        case 12:
                            VBTitleByNum(arr,13);
                            break;
                        case 13:
                            VBTitleByNum(arr,14);
                            playOut();
                            stopTimer();

                            title1Out();

                            Scene3In();
                            frontScene3In();
                            train3In();
                            break;
                        default:
                            break;
                    }
                }else{
                    booleanArr.push(false);
                }
            }
        }
        if(enteredPass2.length>0 ){
            // console.log("enteredPass里面开始有内容的时候："+booleanArr);
            // console.log("当前指针对应的boolean值是："+booleanArr[enteredPass2.length-1]+"");
            if (booleanArr[enteredPass2.length-1]){
                checkRight(key+enteredPass2[enteredPass2.length-1]);
            }else {
                checkWrong(key+enteredPass2[enteredPass2.length-1]);
                enteredPass2.pop();
            }
            //需要清空，重新加入新的遍历array
            booleanArr=[];
        }else{
        }
        // console.log("enteredPass的状态："+enteredPass2);
    }

    function checkPasscode3(key,password,arr) {
        /*Runs through each of the password values. If the arrays match, it triggers the unlocked() function */
        if (enteredPass3.length>password.length){
            return;
        }else{
            for(var i = 0; i<password.length;i++){
                if (enteredPass3[i]==password[i]){
                    booleanArr.push(true);
                    switch (i){
                        case 0:
                            VBTitleByNum(arr,1);
                            break;
                        case 1:
                            VBTitleByNum(arr,2);
                            break;
                        case 2:
                            VBTitleByNum(arr,3);
                            break;
                        case 3:
                            VBTitleByNum(arr,4);
                            break;
                        case 4:
                            VBTitleByNum(arr,5);
                            break;
                        case 5:
                            VBTitleByNum(arr,6);
                            break;
                        case 6:
                            VBTitleByNum(arr,7);
                            break;
                        case 7:
                            VBTitleByNum(arr,8);
                            break;
                        case 8:
                            VBTitleByNum(arr,9);
                            break;
                        case 9:
                            VBTitleByNum(arr,10);
                            break;
                        case 10:
                            VBTitleByNum(arr,11);
                            break;
                        case 11:
                            VBTitleByNum(arr,12);
                            break;
                        case 12:
                            VBTitleByNum(arr,13);
                            break;
                        case 13:
                            VBTitleByNum(arr,14);
                            playOut();
                            stopTimer();

                            title2Out();
                            Scene4In();
                            frontScene4In();
                            train4In();
                            break;
                        default:
                            break;
                    }
                }else{

                    booleanArr.push(false);
                }
            }
        }

        if(enteredPass3.length>0 ){
            if (booleanArr[enteredPass3.length-1]){
                checkRight(key+enteredPass3[enteredPass3.length-1]);
            }else {
                checkWrong(key+enteredPass3[enteredPass3.length-1]);
                enteredPass3.pop();
            }
            //需要清空，重新加入新的遍历array
            booleanArr=[];
        }else{
        }
    }

    function checkPasscode4(key,password,arr) {
        /*Runs through each of the password values. If the arrays match, it triggers the unlocked() function */
        if (enteredPass4.length>password.length){
            return;
        }else{
            for(var i = 0; i<password.length;i++){
                if (enteredPass4[i]==password[i]){
                    booleanArr.push(true);
                    switch (i){
                        case 0:
                            VBTitleByNum(arr,1);
                            break;
                        case 1:
                            VBTitleByNum(arr,2);
                            break;
                        case 2:
                            VBTitleByNum(arr,3);
                            break;
                        case 3:
                            VBTitleByNum(arr,4);
                            break;
                        case 4:
                            VBTitleByNum(arr,5);
                            break;
                        case 5:
                            VBTitleByNum(arr,6);
                            break;
                        case 6:
                            VBTitleByNum(arr,7);
                            break;
                        case 7:
                            VBTitleByNum(arr,8);
                            break;
                        case 8:
                            VBTitleByNum(arr,9);
                            break;
                        case 9:
                            VBTitleByNum(arr,10);
                            playOut();
                            stopTimer();

                            title3Out();
                            Scene5In();
                            frontScene5In();
                            train5In();
                            break;
                        default:
                            break;
                    }
                }else{

                    booleanArr.push(false);
                }
            }
        }

        if(enteredPass4.length>0 ){
            if (booleanArr[enteredPass4.length-1]){
                checkRight(key+enteredPass4[enteredPass4.length-1]);
            }else {
                checkWrong(key+enteredPass4[enteredPass4.length-1]);
                enteredPass4.pop();
            }
            //需要清空，重新加入新的遍历array
            booleanArr=[];
        }else{
        }

    }

    function checkPasscode5(key,password,arr) {
        /*Runs through each of the password values. If the arrays match, it triggers the unlocked() function */
        if (enteredPass5.length>password.length){
            return;
        }else{
            for(var i = 0; i<password.length;i++){
                if (enteredPass5[i]==password[i]){
                    booleanArr.push(true);
                    switch (i){
                        case 0:
                            VBTitleByNum(arr,1);
                            break;
                        case 1:
                            VBTitleByNum(arr,2);
                            break;
                        case 2:
                            VBTitleByNum(arr,3);
                            break;
                        case 3:
                            VBTitleByNum(arr,4);
                            break;
                        case 4:
                            VBTitleByNum(arr,5);
                            break;
                        case 5:
                            VBTitleByNum(arr,6);
                            break;
                        case 6:
                            VBTitleByNum(arr,7);
                            break;
                        case 7:
                            VBTitleByNum(arr,8);
                            break;
                        case 8:
                            VBTitleByNum(arr,9);
                            break;
                        case 9:
                            VBTitleByNum(arr,10);

                            break;
                        case 10:
                            VBTitleByNum(arr,11);

                            break;
                        case 11:
                            VBTitleByNum(arr,12);

                            playRun();
                            stopTimer();

                            title4Out();
                            Scene6In();
                            frontScene6In();
                            train6In();

                            break;
                        default:
                            break;
                    }
                }else{

                    booleanArr.push(false);
                }
            }
        }

        if(enteredPass5.length>0 ){
            if (booleanArr[enteredPass5.length-1]){
                checkRight(key+enteredPass5[enteredPass5.length-1]);
            }else {
                checkWrong(key+enteredPass5[enteredPass5.length-1]);
                enteredPass5.pop();
            }
            //需要清空，重新加入新的遍历array
            booleanArr=[];
        }else{
        }
    }


    /*****************************************声音播放********************************/

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

    function playStart() {
        createjs.Sound.registerSound({src:"asset/audio/start.mp3", id:"start"});
        createjs.Sound.play("start");
    }
    function playRun(){
        createjs.Sound.registerSound({src:"asset/audio/running.mp3", id:"run"});
        createjs.Sound.play("run");
    }


