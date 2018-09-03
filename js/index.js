// 获取id
function getId(id){
    return document.getElementById(id);
}

/**
 * 获取滚动的头部距离和左边距离
 * scroll().top scroll().left
 */
function scroll() {
    if (window.pageYOffset !== null) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.compatMode === "CSS1Compat") { // W3C
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }

    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }
}

// 播放mp3
function audioplay() {
    if (Miss.paused) {
        Miss.play();
    } else {
        Miss.pause();
    }
}

// 数字时间
// 定义一个函数用以显示当前时间
function displayTime() {
    var elt = getId("timer_txt");
    var now = new Date(); // 得到当前时间
    elt.innerHTML = now.toLocaleTimeString(); //让elt来显示它
    setTimeout(displayTime, 1000); //在1秒后再次执行
}
// window.onload = displayTime; //当onload事件发生时开始显示时间