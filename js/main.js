// JavaScript Document
$(function(){
	$('#globalnav li').each(function(index, element) {
        $(this).click(function(){
			$('#globalnav li').removeClass('active');
			$(this).addClass('active');
		});
    });
});



window.onload = function(){
	var oMes=document.getElementById('message');
	var oProject=document.getElementById('lagou');
	var aPro=getByClass(oProject,"pro_li");
	
	
	//开头字幕
	/*for(var i = 0; i < str.length; i++){
		var oSpan = document.createElement("span");
		oSpan.innerHTML = str[i];
		oMes.appendChild(oSpan);
	}
	var i = 0;
	var aSpan = oMes.children;
	
	var time=setTimeout(function(){
		var timer = setInterval(function(){
			
			aSpan[i].className = "active";
			
			i++;
			if(i == str.length){
				clearInterval(timer);
			}	
		},100);
	},1000);*/
	
	//个人效果
	
	for(var i=0; i<aPro.length; i++){
		(function(index){
			aPro[i].onmouseover=function(){
				this.getElementsByTagName('a')[0].style.opacity="1";
			};
			aPro[i].onmouseout=function(){
				this.getElementsByTagName('a')[0].style.opacity="0";
			};		
		})(i)
	}
	
 
};






























































































