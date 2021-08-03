window.onload = function () {
    //获取元素
    let aside = document.querySelector('.aside');
    let html = document.documentElement;
    let timer = null;
    //页面卷动值大于可视窗口大小是显示aside
    window.onscroll = function () {
        if (html.scrollTop > html.clientHeight) {
            aside.style.display = "block";
        } else {
            aside.style.display = "none";
        }
    }

    //点击回到顶部时，文档在一定时间内回到顶部
    aside.onclick = function () {
        timer = setInterval(() => {
            html.scrollTop -= Math.floor(html.scrollTop / 10);
            if (html.scrollTop < 10) {
                html.scrollTop = 0;
                clearInterval(timer);
            }
        }, 30);
    }
}


