var cvs = document.getElementById("canvas");
$("#navbar").ready(function() {
    drawCircle();
});
$("#navbar_btn").mouseover(function() {
    navbar_draw();
});


function getRemw() {
    var remw = 0,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    // body... 
    var docEl = document.documentElement;
    var clientWidth = docEl.clientWidth;
    if (clientWidth >= 640) {
        // docEl.style.fontSize = '100px';
        remw = clientWidth / 19;
    } else {
        remw = 100 * (clientWidth / 640);
    }
    return remw;
}

function navbar_draw(argument) {
    // body...  
    var m1 = 0.5;
    var m2 = 0.5;
    var timer = null;
    var remw = getRemw();
    //获取画布的对象
    var canvas = document.getElementById("canvas");
    //设置canvas上下文环境
    var context = canvas.getContext('2d');

    //设置画布的宽高
    // canvas.width = '28';
    // canvas.height = '28';
    canvas.width = 0.26 * remw;
    canvas.height = 0.26 * remw;

    //运用定时器对圆环的终止弧度进行动态增加
    timer = setInterval(function() {
        // m1 = m1 - 0.05
        m2 = m2 + 0.1;
        if (m2 >= 2.5) {
            m2 = 2.5;
            //当弧度大于设定的弧度清除定时器
            clearInterval(timer);
            drawCircle();
        }
        context.clearRect(0, 0, canvas.width, canvas.height); //每次进行绘制前，把之前绘制的图像删除掉
        drawArc(context, m1, m2, canvas.width, canvas.height); //调用绘制圆环的方法
    }, 15);
};

//自定义一个绘制圆环的方法
var drawArc = function(txt, m1, m2, w, h) {

    txt.strokeStyle = '#7F7F7F';
    txt.lineWidth = '2';
    txt.beginPath();
    txt.arc(w / 2, h / 2, w / 2 - 2, 0, 2 * Math.PI, false);
    txt.stroke();
    txt.closePath();
    txt.strokeStyle = '#fff';
    txt.lineWidth = '2';
    txt.beginPath();
    txt.arc(w / 2, h / 2, w / 2 - 2, m1 * Math.PI, m2 * Math.PI, false);
    txt.stroke();
    txt.closePath();
};

function drawCircle() {
    // body...  
    var remw = getRemw();
    var txt = cvs.getContext('2d');
    txt.clearRect(0, 0, 0.26 * remw, 0.26 * remw);
    //设置画布的宽高
    cvs.width = 0.26 * remw;
    cvs.height = 0.26 * remw;
    txt.strokeStyle = '#fff';
    txt.lineWidth = '2';
    txt.beginPath();
    txt.arc(cvs.width / 2, cvs.height / 2, cvs.width / 2 - 2, 0, 2 * Math.PI, false);
    txt.stroke();
    txt.closePath();

};