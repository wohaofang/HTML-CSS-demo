window.onload = function() {
    //读取localstorage
    if (localStorage.bgColor) {
        document.body.style.background = localStorage.bgColor;
    }
    //颜色
    var cols = ["#f2dede", "#fcf8e3", "#d9edf7", "#d8bfd8", "#dff0d8"];
    //获取ul
    var colors = document.getElementById("colors");
    //获取li
    var lis = colors.getElementsByTagName("li");
    //页面的背景

    //li点击事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            changeColor(this);
        }
    }
    //改变背景颜色
    function changeColor(ele) {
        if (ele.className == "red") {
            document.body.style.background = cols[0];
            localStorage.setItem("bgColor", cols[0]);
        } else if (ele.className == "yellow") {
            document.body.style.background = cols[1];
            localStorage.setItem("bgColor", cols[1]);
        } else if (ele.className == "blue") {
            document.body.style.background = cols[2];
            localStorage.setItem("bgColor", cols[2]);
        } else if (ele.className == "purple") {
            document.body.style.background = cols[3];
            localStorage.setItem("bgColor", cols[3]);
        } else {
            document.body.style.background = cols[4];
            localStorage.setItem("bgColor", cols[4]);
        }
    }

}
