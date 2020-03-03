monitor.controller('cspCtrl', function ($scope, $state, $stateParams, ngDialog, $interval, GetHmiData) {
    /*
    * 最小位置-0.1
    * 到f1 13.6m
    * 到f2 19.19m
    * 到f3 25m
    * 到f4 30.57m
    * 到f5 36.24m
    * 到f6 42.17m
    * 到f7 47.14m
    *
    *
    * f1抛钢
    * */
    var head_pos = 13.6;
    var tail_pos = 0;//-8.1 定值
    var shiji_length = 5.4 + (5.5 * 6) + 4.5;
    var yemian_length = 1643;
    var div_width
    var steel_1 //坯尾div
    GetHmiData.save({
        tags: [
            {
                name: "HeadPos",
                ts: "0"
            }, {
                name: "TailPos",
                ts: "0"
            }
        ],
        msg: []
    }, function (res) {
        head_pos = res.data.tagList[0].value;
        tail_pos = res.data.tagList[1].value;
        head_pos = (head_pos - 8.1) < 0 ? 0 : (head_pos - 8.1);
        tail_pos = (tail_pos - 8.1) < 0 ? 0 : (tail_pos - 8.1);
        animationFn()
    })
    //模拟
   /* var cc = setInterval(function () {
        /!*head_pos++
        if (head_pos >= 40) {
            tail_pos++
        }
        if (tail_pos >= 40) {
            clearInterval(cc)
        }*!/

    }, 1000)*/


    $scope.animation_time = {
        s1_big: "animation-duration: 8s",
        s2_big: "animation-duration: 7.5s",
        s3_big: "animation-duration: 7s",
        s4_big: "animation-duration: 6.5s",
        s5_big: "animation-duration: 6s",
        s6_big: "animation-duration: 5.5s",
        s7_big: "animation-duration: 5s",
        s1_small: "animation-duration: 5s",
        s2_small: "animation-duration: 4.5s",
        s3_small: "animation-duration: 4s",
        s4_small: "animation-duration: 3.5s",
        s5_small: "animation-duration: 3s",
        s6_small: "animation-duration: 2.5s",
        s7_small: "animation-duration: 2s",
    }

    function animationFn() {
        div_width = ((head_pos - tail_pos) * yemian_length) / shiji_length;
        steel_1 = (tail_pos * yemian_length) / shiji_length;
        $('.steel').width(div_width);
        $('.steel_1').width(steel_1);
        if (div_width >= 415 && $('.steel_1').width() <= 0) {//到s2
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 633 && $('.steel_1').width() <= 0) {//到s3
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 845 && $('.steel_1').width() <= 0) {//到s4
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1060 && $('.steel_1').width() <= 0) {//到s5
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1270 && $('.steel_1').width() <= 0) {//到s6
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1486 && $('.steel_1').width() <= 0) {//到s7
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1643 && $('.steel_1').width() <= 0) {
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s7_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }

        //下落
        if ($('.steel_1').width() >= 422) {//到s2
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 636) {//到s3
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 851) {//到s4
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1063) {//到s5
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1276) {//到s6
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1492) {//到s7
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1643) {
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s7_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
    }
})