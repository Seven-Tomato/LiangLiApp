

function who_browser(){
	  var browser = {
		    versions: function () {
		        var u = navigator.userAgent, app = navigator.appVersion;
		        return {         //移动终端浏览器版本信息
		            trident: u.indexOf('Trident') > -1, //IE内核
		            presto: u.indexOf('Presto') > -1, //opera内核
		            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
		            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
		            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
		            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
		            iPad: u.indexOf('iPad') > -1, //是否iPad
		            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		        };
		    }(),
		    language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

	if (browser.versions.mobile) {//判断是否是移动设备打开。
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
              return "微信"/* 微信*/
        }
        if (ua.match(/WeiBo/i) == "weibo") {
               return "新浪微博" /*新浪微博*/
        }
        if (ua.match(/QQ/i) == "qq") {
              return "qq空间" /* qq空间*/
        }
        if (browser.versions.ios) {
               return "ios" /*  ios浏览器*/
        } 
        if(browser.versions.android){
             return "android"/*  安卓浏览器*/
        }
    } else {
         return "pc"/*  pc端*/
    }

}
