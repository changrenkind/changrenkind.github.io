// JavaScript Document
function getStyle(obj,attr){
	return obj.currentStyle !=-1?obj.currentStyle[attr]:obj.computedStyle(attr,false);
}
var timer=null;
function move(obj,attr,Target,time){
	var start=parseInt(getStyle(obj,attr));
	var dis=Target-start;
	var count=Math.round(time/30);
	var n=0;
	clearInterval(timer);
	timer=setInterval(function(){
		n++;
		var cur=start+n*dis/count;
		if(attr=='opacity'){
			obj.style[attr]=cur;
			obj.style.filter='alpha(opacity:'+cur*100+')';	
		}else{
			obj.style[attr]=cur+'px';
		}	
		if(n==count) clearInterval(timer);
	},30);
}
function ready(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);	
	}else{
		document.onreadystatechange=function(){
			if(document.readyState=='complete'){
				fn();	
			}	
		};	
	}
}

function addMouseWheel(obj,fn){
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox') !=-1){
		obj.addEventListenter('DOMMouseScroll',fnWheel,false);	
	}else{
		obj.onmousewheel=fnWheel;	
	}	
	function fnWheel(ev){
		var oEvt=ev||event;
		var dir=true;
		if(oEvt.wheelDelta){
			dir=oEvt.wheelDelta>0?false:true;	
		}else{
			dir=oEvt.detail>0?true:false;	
		}	
		(typeof fn == 'function') && fn(dir);
		oEvt.preventDefault && oEvt.preventDefalult();
		return false;
	}

}
























