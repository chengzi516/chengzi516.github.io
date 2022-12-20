// 霓虹灯效果
// 颜色数组
var arr = ["#39c5bb", "#f14747", "#f1a247", "#f1ee47", "#b347f1", "#1edbff", "#ed709b", "#5636ed"];
// 颜色索引
var idx = 0;

// 切换颜色
function changeColor() {
    // 仅夜间模式才启用
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark') {
        if (document.getElementById("site-name"))
            document.getElementById("site-name").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-title"))
            document.getElementById("site-title").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-subtitle"))
            document.getElementById("site-subtitle").style.textShadow = arr[idx] + " 0 0 10px";
        if (document.getElementById("post-info"))
            document.getElementById("post-info").style.textShadow = arr[idx] + " 0 0 5px";
        try {
            document.getElementsByClassName("author-info__name")[0].style.textShadow = arr[idx] + " 0 0 12px";
            document.getElementsByClassName("author-info__description")[0].style.textShadow = arr[idx] + " 0 0 12px";
        } catch {
            
        }
        idx++;
        if (idx == 8) {
            idx = 0;
        }
    } else {
        // 白天模式恢复默认
        if (document.getElementById("site-name"))
            document.getElementById("site-name").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-title"))
            document.getElementById("site-title").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-subtitle"))
            document.getElementById("site-subtitle").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("post-info"))
            document.getElementById("post-info").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        try {
            document.getElementsByClassName("author-info__name")[0].style.textShadow = "";
            document.getElementsByClassName("author-info__description")[0].style.textShadow = "";
        } catch {
            
        }
    }
}

// 开启计时器
window.onload = setInterval(changeColor, 1200);



setInterval(() => {
    // let create_time = Math.round(new Date('2021-10-15 00:00:00').getTime() / 1000); //在此行修改建站时间
    // 有苹果用户发现safari浏览器不能正常运行，百度了一下发现是格式化的问题，改成下面这种应该就可以了。感谢反馈。
    let create_time = Math.round(new Date('2022/12/3 20:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function(h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second >= 0) {
        time[4] = nol(second);
    }
    let currentTimeHtml = ""
    if (time[0] != 0) {
        currentTimeHtml += time[0] + ' YEAR '
    }
    currentTimeHtml += time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4];
    document.getElementById("runtime").innerHTML = currentTimeHtml;
}, 1000);



//浏览器破旧警告

function browserTC() {
    btf.snackbarShow("");
    Snackbar.show({
        text: '浏览器版本较低，网站样式可能错乱',
        actionText: '关闭',
        duration: '6000',
        pos: 'bottom-right'
    });
}
function browserVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
    var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
    var isOpera = userAgent.indexOf("Opera")>-1 || userAgent.indexOf("OPR")>-1 ; //Opera浏览器
    var isChrome = userAgent.indexOf("Chrome")>-1 && userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Chrome浏览器
    var isSafari = userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Chrome")==-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Safari浏览器
    if(isEdge) {
        if(userAgent.split('Edge/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isFirefox) {
        if(userAgent.split('Firefox/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isOpera) {
        if(userAgent.split('OPR/')[1].split('.')[0]<80){
            browserTC()
        }
    } else if(isChrome) {
        if(userAgent.split('Chrome/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isSafari) {
        //不知道Safari哪个版本是该淘汰的老旧版本
    }
}
//2022-10-29修正了一个错误：过期时间应使用toGMTString()，而不是toUTCString()，否则实际过期时间在中国差了8小时
function setCookies(obj, limitTime) {
	let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
	for (let i in obj) {
		document.cookie = i + '=' + obj[i] + ';expires=' + data
	}
}
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
if(getCookie('browsertc')!=1){
    setCookies({
        browsertc: 1,
    }, 1);
    browserVersion();
}

