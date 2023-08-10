$(function() {
    
    let rtop = $(".recommend").offset().top
    let jieliu = true
    // 打开页面立即调用判断是否显示电梯导航
    toggleTop()
    function toggleTop() {  
        if ($(document).scrollTop() >= rtop) {
            $(".fixedtool").fadeIn();
    
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    
    $(window).scroll(function () {  
        // 1 滚动显示电梯导航 fixedtool
        // console.log($(window).scrollTop());
        toggleTop()
        

        // 3 滑动显示电梯导航
        if (jieliu) {
            $(".floor .w").each(function (i,ele) {  
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
    
                }
            })

        }
        
    })

    // 2 点击电梯导航跳转显示
    $(".fixedtool li").click(function () {  
        jieliu = false
        console.log($(this).index());
        let totop = $(".floor .w").eq($(this).index()).offset().top
        $("body, html").stop().animate({  
            scrollTop : totop,
        // 作为互斥锁的控制变量添加在动画的回调函数中，在动画完成之后（异步）才执行，避免了滑动造成的2此触发电梯导航效果
        },function () {  
            jieliu = true
        })
        
        $(this).addClass("current").siblings().removeClass();
        

    })
    
    

})