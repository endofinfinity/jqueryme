$(function () {  
    
    // 取数据
    function getData() {  
        let data = localStorage.getItem("todolist")
        if (data !== null) {
            return JSON.parse(data)
        } else {
            return []
        }
    }

    // 存数据
    function saveData(data) {  
        localStorage.setItem("todolist",JSON.stringify(data))
    }

    // 渲染数据
    function loadData() {  
        let data = getData()
        let todonum = 0
        let donenum = 0
        $("ol, ul").empty()
        $.each(data,function (i,ele) {
            if (ele.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + ele.title + "</p> <a href='javascript:;' id="+i+"></a></li>");
                donenum++
                
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + ele.title + "</p> <a href='javascript:;' id="+i+"></a></li>");
                todonum++
            }
            
        })
        $("#todocount").text(todonum);
        $("#donecount").text(donenum);

    }
    loadData()

    // 1. 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
    $("#title").on("keydown",function (ele) {  
        if (ele.keyCode === 13) {
            if ($(this).val() !== "") {
                let local = getData()
                // console.log(local);
                local.push({title:$(this).val(),done:false})
                saveData(local)
                $(this).val("")
            } else {
                alert("请输入内容")
            }
        }
        loadData()
    })

    // 2、删除事件
    $("ol, ul").on("click","a",function () {  
        // 取数据
        let data = getData()
        console.log($(this));
        // 根据id删除
        let i = $(this).attr("id")
        data.splice(i,1)
        // 存储数据
        saveData(data)
        // 渲染数据
        loadData()
    })

    // 3、完成事件
    $("ol, ul").on("click","input",function () {  
        // 取数据
        let data = getData()
        // 判断done的值
        // 自定义属性获取attr
        let i = $(this).siblings("a").attr("id")
        // 固有属性prop
        data[i].done = $(this).prop("checked")
        // 存储数据
        saveData(data)
        // 渲染数据
        loadData()
    })

})