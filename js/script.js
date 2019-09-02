

// Timer
    var minute,
        time,
        second;
    window.minute=0;
    window.second=0;
    window.time=0;

    var int;


    /*function resetTimer()//重置
    {
        window.clearInterval(int);
        minute=second=0;
        document.getElementById('timer').innerHTML='00:00';
    }*/

    function startTimer()//开始
    {
        int=setInterval(timer,1000);

    }

    function timer()//计时
    {
        time++;
        var second1 = time % 60;
        var minute1 = Math.floor(time / 60) % 60;


        second = (second1 < 10) ? '0'+second1 : second1;
        minute = (minute1 < 10) ? '0'+minute1 : minute1;


        document.getElementById('timer').innerHTML=minute+':'+second;
        // console.log(minute+":"+second);

    }

    function stopTimer()//暂停
    {
        window.clearInterval(int);
    }

// 预加载逻辑

window.onload = preload(handleFileProgress,handleComplete);

//加载中函数
function handleFileProgress(){
    let percent=loader.progress*100|0+'%';
    $('loadPercent').innerHTML=percent+"%";
}
//todo the bgm will trigger DOMexceptions because of the new chrome policies
function handleComplete(){
    // 显示下一张图
    console.log("preload finished");
    $('#pageLoad').hide();
    $('#pageStage').show();
    //frontScene1In();
    //Scene1In();
    //todo hint div and the start div is behide the front scene
    front_scene.render();
    back_scene.render();
    bubble();
    speed_train.render();
    speed_train.update(train_loc_1.x,train_loc_1.b,function () {
        $("#hint").show();
    });
}

//events' logic
$(function () {
    //page1
    $("#hint").on('click', function () {
        $("#hint").hide();
        audio_run.play();
        speed_train.update(train_loc_2.x, train_loc_2.b, function () {
            $("#title").addClass('mainIn');
            $("#startBtn").addClass('mainIn');
        });
    });

    $("#startBtn").on('click', function () {
        /*console.log()*/
        audio_out.play();
        back_scene.update(back_loc_1.x,back_loc_1.b, ()=> {
                snow();
        });

        // Scene2In();
        frontScene2In();
        train2In();
        title1In();

    });

    //page2
    $('#key20').on('click', function () {
        // console.log('#key20 点击了');
        quiz2(0);
    });
    $('#key21').on('click', function () {
        quiz2(1);
    });
    $('#key22').on('click', function () {
        quiz2(2);
    });
    $('#key23').on('click', function () {
        quiz2(3);
    });
    $('#key24').on('click', function () {
        quiz2(4);
    });
    $('#key25').on('click', function () {
        quiz2(5);
    });
    $('#key26').on('click', function () {
        quiz2(6);
    });
    $('#key27').on('click', function () {
        quiz2(7);
    });
    $('#key28').on('click', function () {
        quiz2(8);
    });
    $('#key29').on('click', function () {
        quiz2(9);
    });
    //page3

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
        $('#slogan1').hide();
        $('#slogan2').hide();
        $('#flag').hide();
        $('#check').hide();

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

//title的初始化
    var Title1_0= new createjs.Bitmap("./images/title1/0.png");
    var Title1_1= new createjs.Bitmap("./images/title1/1.png");
    var Title1_2= new createjs.Bitmap("./images/title1/2.png");
    var Title1_3= new createjs.Bitmap("./images/title1/3.png");
    var Title1_4= new createjs.Bitmap("./images/title1/4.png");
    var Title1_5= new createjs.Bitmap("./images/title1/5.png");
    var Title1_6= new createjs.Bitmap("./images/title1/6.png");
    var Title1_7= new createjs.Bitmap("./images/title1/7.png");
    var Title1_8= new createjs.Bitmap("./images/title1/8.png");
    var Title1_9= new createjs.Bitmap("./images/title1/9.png");
    var Title1_10= new createjs.Bitmap("./images/title1/10.png");
    var Title1_11= new createjs.Bitmap("./images/title1/11.png");
    var Title1_12= new createjs.Bitmap("./images/title1/12.png");
    var Title1_13= new createjs.Bitmap("./images/title1/13.png");
    var Title1_14= new createjs.Bitmap("./images/title1/14.png");

    var Title2_0= new createjs.Bitmap("./images/title2/0.png");
    var Title2_1= new createjs.Bitmap("./images/title2/1.png");
    var Title2_2= new createjs.Bitmap("./images/title2/2.png");
    var Title2_3= new createjs.Bitmap("./images/title2/3.png");
    var Title2_4= new createjs.Bitmap("./images/title2/4.png");
    var Title2_5= new createjs.Bitmap("./images/title2/5.png");
    var Title2_6= new createjs.Bitmap("./images/title2/6.png");
    var Title2_7= new createjs.Bitmap("./images/title2/7.png");
    var Title2_8= new createjs.Bitmap("./images/title2/8.png");
    var Title2_9= new createjs.Bitmap("./images/title2/9.png");
    var Title2_10= new createjs.Bitmap("./images/title2/10.png");
    var Title2_11= new createjs.Bitmap("./images/title2/11.png");
    var Title2_12= new createjs.Bitmap("./images/title2/12.png");
    var Title2_13= new createjs.Bitmap("./images/title2/13.png");
    var Title2_14= new createjs.Bitmap("./images/title2/14.png");

    var Title3_0= new createjs.Bitmap("./images/title3/0.png");
    var Title3_1= new createjs.Bitmap("./images/title3/1.png");
    var Title3_2= new createjs.Bitmap("./images/title3/2.png");
    var Title3_3= new createjs.Bitmap("./images/title3/3.png");
    var Title3_4= new createjs.Bitmap("./images/title3/4.png");
    var Title3_5= new createjs.Bitmap("./images/title3/5.png");
    var Title3_6= new createjs.Bitmap("./images/title3/6.png");
    var Title3_7= new createjs.Bitmap("./images/title3/7.png");
    var Title3_8= new createjs.Bitmap("./images/title3/8.png");
    var Title3_9= new createjs.Bitmap("./images/title3/9.png");
    var Title3_10= new createjs.Bitmap("./images/title3/10.png");

    var Title4_0= new createjs.Bitmap("./images/title4/0.png");
    var Title4_1= new createjs.Bitmap("./images/title4/1.png");
    var Title4_2= new createjs.Bitmap("./images/title4/2.png");
    var Title4_3= new createjs.Bitmap("./images/title4/3.png");
    var Title4_4= new createjs.Bitmap("./images/title4/4.png");
    var Title4_5= new createjs.Bitmap("./images/title4/5.png");
    var Title4_6= new createjs.Bitmap("./images/title4/6.png");
    var Title4_7= new createjs.Bitmap("./images/title4/7.png");
    var Title4_8= new createjs.Bitmap("./images/title4/8.png");
    var Title4_9= new createjs.Bitmap("./images/title4/9.png");
    var Title4_10= new createjs.Bitmap("./images/title4/10.png");
    var Title4_11= new createjs.Bitmap("./images/title4/11.png");
    var Title4_12= new createjs.Bitmap("./images/title4/12.png");


    var arrTitle1=[Title1_0,Title1_1,Title1_2,Title1_3,Title1_4,
        Title1_5,Title1_6,Title1_7,Title1_8,Title1_9,Title1_10,
        Title1_11,Title1_12,Title1_13,Title1_14];
    var arrTitle2=[Title2_0,Title2_1,Title2_2,Title2_3,Title2_4,
        Title2_5,Title2_6,Title2_7,Title2_8,Title2_9,Title2_10,
        Title2_11,Title2_12,Title2_13,Title2_14];
    var arrTitle3=[Title3_0,Title3_1,Title3_2,Title3_3,Title3_4,
        Title3_5,Title3_6,Title3_7,Title3_8,Title3_9,Title3_10];
    var arrTitle4=[Title4_0,Title4_1,Title4_2,Title4_3,Title4_4,
        Title4_5,Title4_6,Title4_7,Title4_8,Title4_9,Title4_10,
        Title4_11,Title4_12];

// 火车page1
    var  stage1=new createjs.Stage("canvas1");
    var  stage_bg1= new createjs.Stage('bg1');

    var  stage_fbg1= new createjs.Stage('fbg1');
// var  background1 = new createjs.Bitmap('./images/page1/bgt.png');
    var  background1 = new createjs.Bitmap('./images/page1/bgt1.png');
    var  frontgrond1 = new createjs.Bitmap('./images/page1/fbgt.png');

//     function train1In() {
//         stage1.canvas.width=h;
//         stage1.canvas.height=w;
//
//         train.scaleX=scale;
//         train.scaleY=scale;
//         railway.scaleY=scale;
//
// //设置在舞台中的位置
//         train.x=1000;
//         train.y=positonY;
//         railway.y=positonY;
// // 把动画放到舞台上，创建一个间隔事件侦听，进行动画
//         stage1.addChild(railway);
//         stage1.addChild(train);
//
//         createjs.Ticker.setFPS(ratio);
//         createjs.Ticker.on('tick',stage1);
//         createjs.Tween.get(train, {loop: false})
//             .to({x: h*3/4}, 8000, createjs.Ease.getPowInOut(4)).call(handleComplete);
//
//         function handleComplete() {
//             console.log("hint show or not?");
//             $("#hint").show();
//         }
//
//         // console.log("train1In 的帧率："+createjs.Ticker.getMeasuredFPS());
//     }
//     function train1Enter() {
//         createjs.Tween.get(train, {loop: false})
//             .to({x: 10}, 4000, createjs.Ease.getPowInOut(4)).call(handleComplete);
//         function handleComplete() {
//             $("#title").addClass('mainIn');
//             $("#startBtn").addClass('mainIn');
//         }
//         console.log("train1Enter 的帧率："+createjs.Ticker.getMeasuredFPS());
//
//     }

    function Scene2In() {

        createjs.Tween.get(background1, {loop: false})
            .to({x: -4*h}, 6000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            snow();
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
        $(".page1float").hide();
        $("#bubble").hide();
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


    function train2In(){
        createjs.Tween.get(train, {loop: false})
            .to({x: -0.3*h}, 8000, createjs.Ease.getPowInOut(4)).call(handleComplete);
        function handleComplete() {
            // 第二页要显示的逻辑
            $('.timer').show();
            startTimer();
            $('.keys2').addClass('mainIn');
        }
        console.log("train2In 的帧率："+createjs.Ticker.getMeasuredFPS());
    }
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
        createjs.Tween.get(Title1_14, {loop: false})
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
        createjs.Tween.get(Title2_14, {loop: false})
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
        createjs.Tween.get(Title3_10, {loop: false})
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
        createjs.Tween.get(Title4_12, {loop: false})
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
//page1 实验性的动效
    var bubbleStage,
        bubbleCanvas,
        bubbleContainer;
    bubbleCanvas=document.getElementById('bubble');
    function bubble(){
        // console.log("bubble canvas 创建");
        bubbleStage = new createjs.Stage(bubbleCanvas);//创建舞台
        bubbleContainer= new createjs.Container();
        bubbleStage.addChild(bubbleContainer);
        bubbleStage.canvas.height=w;
        bubbleStage.canvas.width=h;
        var data ={
            framerate:1,
            images:['./images/page1/bubble.png'],
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
        bubbleContainer.addChild(img1);

        // createjs.Ticker.setFPS(30);
        createjs.Ticker.on('tick',bubbleStage);
    }

//page2 实验性的动效
    var img,snowStage,
        snowCanvas,
        snowContainer;
    snowCanvas=document.getElementById('snow');
    function snow(){
        // console.log("snow canvas 创建成功");
        snowStage = new createjs.Stage(snowCanvas);//创建舞台
        snowContainer= new createjs.Container();
        snowStage.addChild(snowContainer);
        snowStage.canvas.height=w;
        snowStage.canvas.width=h;

        var data ={
            framerate:2,
            images:['./images/page2/snow1.png'],
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
        snowContainer.addChild(img1);
        // createjs.Ticker.setFPS(2);
        createjs.Ticker.on('tick',snowStage);
    }

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
    function quiz2(a) {
        var Choice = $('#key2'+a).attr('data-choice');
        enteredPass2.push(Choice);
        checkPasscode2('#key2',password_shijie,arrTitle1);
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


