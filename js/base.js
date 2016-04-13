// JavaScript Document
function getStyle(obj,attr){
	return obj.currentStyle !=-1?obj.currentStyle[attr]:obj.computedStyle(attr,false);
}
function move(obj,json,opational){
	
	var opational = opational || {};
	opational.time = opational.time || 300;
	opational.fn = opational.fn || null;
	opational.type = opational.type || 'ease-out';
	
	var start={};
	var dis={};
	for(var key in json){
		start[key]=parseInt(getStyle(obj,key));
		dis[key]=json[key]-start[key];
	}
	
	var count=Math.round(opational.time/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		
		for(var key in json){
			//办事
			switch(opational.type){
				case 'linear':
					var a = n/count;
					var cur=start[key]+dis[key]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[key]+dis[key]*a*a*a
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[key]+dis[key]*(1-a*a*a)
					break;	
			}
			
			if(key=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[key]=cur+'px';
				
			}	
		}
		
		if(n==count){
			clearInterval(obj.timer);
			opational.fn && opational.fn();	
		}
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

function getByClass(oParent,sClass){
		if(oParent.getElementsByClassName)
			return oParent.getElementsByClassName(sClass);
		
		
		var aEle=oParent.getElementsByTagName('*');
		var result=[];
		var re=new RegExp('\\b'+sClass+'\\b');
		for(var i=0;i<aEle.length;i++){
			if(re.test(aEle[i].className)){
				result.push(aEle[i]);
			}
		}
		return result;
}






















