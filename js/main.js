// JavaScript Document

window.onload=function(){
	var oBox=document.getElementById('box');
	var aPage=oBox.children;
	var oChange=document.getElementById('change');
	var oEffect=document.getElementById('effect');
	
	for(var i=0;i<aPage.length;i++){
		aPage[i].style.height=document.documentElement.clientHeight+'px';	
	}
}
































































































