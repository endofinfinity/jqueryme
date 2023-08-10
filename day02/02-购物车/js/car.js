$(function () {  
    // 1、总-分
    $(".checkall").change(function () {  
        $(".j-checkbox, .checkall").prop("checked",$(this).prop("checked"))
        // 子框css效果变更
        if ($(this).prop("checked")) {
            // console.log("111");
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
        getSum()

    })
    // 2、分-总
    $(".j-checkbox").change(function () {  
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked",true)

        } else {
            $(".checkall").prop("checked",false)
        }
        // 子框css效果变更
        if ($(this).prop("checked")) {
            // console.log("111");
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSum()
    })

    // 3、商品数量+-
    $(".increment").click(function () {  
        let n = $(this).siblings(".itxt").val();
        n++
        $(this).siblings(".itxt").val(n) 
        let summ = $(this).parents(".p-num").siblings(".p-price").html()
        // console.log(summ);
        sum = summ.substr(1)
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+ (sum * n).toFixed(2))
        getSum()

    })

    $(".decrement").click(function () {  
        let n = $(this).siblings(".itxt").val();
        if (n<= 1) {
            return false
        }
        n--

        $(this).siblings(".itxt").val(n) 
        let summ = $(this).parents(".p-num").siblings(".p-price").html()
        // console.log(summ);
        sum = summ.substr(1)
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+ (sum * n).toFixed(2))
        getSum()
    })

    // 4、直接输入数量
    $(".itxt").change(function (){  
        let n = $(this).val()
        let summ = $(this).parents(".p-num").siblings(".p-price").html()
        // console.log(summ);
        sum = summ.substr(1)
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+ (sum * n).toFixed(2))
        getSum()

    })

    // 5、总计
    getSum()
    function getSum() {  
        let sum = 0
        let nsum = 0
    
        $(".check-cart-item .itxt").each(function (indexInArray, valueOfElement) { 
            nsum += parseInt($(valueOfElement).val()) 
        });
        $(".amount-sum em").text(nsum)

        $(".check-cart-item .p-sum").each(function (i,ele) {  
            sum += parseFloat($(ele).text().substr(1))
        })
        $(".price-sum em").text("￥"+ sum.toFixed(2))


    }
    // 6、删除
    $(".p-action a").click(function () {  
        $(this).parents(".cart-item").remove()
        getSum()
    })

    $(".remove-batch").click(function () {
        $(".check-cart-item").remove()  
        getSum()      
    })

    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })




})