
/**
 * About autoplay BGM:
 * The latest Chrome policy have forbidden this action.
 * The solution is Using a button to trigger.
 * For the future: Need to be discussed with customers first.
 */

// preload

window.onload = preload(handleFileProgress,handleComplete);

function handleFileProgress(){
    let percent=loader.progress*100|0+'%';
    $('loadPercent').innerHTML=percent+"%";
}

function handleComplete(){

    Hide(['#pageLoad']);
    $('#pageStage').show();

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
        front_scene.update(location_1);
        back_scene.update(location_1);

        speed_train.update(train_loc_3,()=>{
            snow_anim.render();
            $('.timer').show();
            $('.keys2').addClass('mainIn');

            startTimer();
        });

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
                Hide([".keys2","#snow"]);
                topic1.Leave(function () {
                    $('#title1').hide();
                    topic2.render();
                    topic2.Enter(3000);
                });

                speed_train.update(train_loc_4,()=>{
                    cloud_anim.render();
                    signal_anim.render(signal_args.count,signal_args.array);
                    startTimer();
                    $('.keys3').addClass('mainIn');
                });

                front_scene.update(location_2);
                back_scene.update(location_2);
            }
        }else if(sec_id == 3) {
            password = password3;
            arrTitle = arrTitle3;
            procedure = function () {
                Hide([".keys3","#cloud","#signal"]);

                speed_train.update(train_loc_4,()=>{
                    heart_anim.render();
                    startTimer();
                    $('.keys4').addClass('mainIn');
                });
                topic2.Leave(function () {
                    $('#title2').hide();
                    topic3.render();
                    topic3.Enter(3000);
                });

                front_scene.update(location_3);
                back_scene.update(location_3);
            }
        }else if(sec_id == 4) {
            password = password4;
            arrTitle = arrTitle4;
            procedure = function () {
                Hide([".keys4","#heart"]);

                speed_train.update(train_loc_4, () => {
                    money_anim.render(money_args.count,money_args.array);

                    startTimer();
                    $('.keys5').addClass('mainIn');
                });
                topic3.Leave(function () {
                    $('#title3').hide();
                    topic4.render();
                    topic4.Enter(3000);
                });

                front_scene.update(location_4);
                back_scene.update(location_4);

            }
        }else if(sec_id == 5) {
            password = password5;
            arrTitle = arrTitle5;
            procedure = function () {
                Hide([".keys5","#money",".timer"]);
                speed_train.update(train_loc_5,() =>{
                    money2_anim.render(money_args.count,money_args.array);

                    $('#flag').addClass('mainIn');
                    $('#slogan1').addClass('mainIn');

                    setTimeout(function () {
                        $('#slogan1').removeClass('mainIn');
                        $('#slogan1').addClass('fadeOut');

                        $('#slogan2').addClass('mainIn');
                        $('#check').addClass('mainIn');
                    },5000);
                });
                topic4.Leave(function () {
                    $('#title4').hide();
                });

                front_scene.update(location_5);
                back_scene.update(location_5);
            }
        }

        // console.log('passed password',password);
        // console.log('passed arrTitle',arrTitle);
        parseQuiz(sec_id,key_id,password,arrTitle,procedure);

    });


    //page6 result page
    $('#checkBtn').on('click', function () {

        Hide(['#slogan1','#slogan2','#flag','#check']);
        $('#page7').show();
        // myAudio.pause();
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
        window.location.href = 'http://www.founder.com';
    });
    $('#retry').on('click', function () {
        window.location.href = 'index.html';
    })
});




