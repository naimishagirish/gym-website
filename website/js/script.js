/*$(function(){ // Same as document.addEventListener("DOMContentLoaded"..

	$("#btn").blur(function(event){  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
		var screenWidth=window.innerWidth;
		if(screenWidth<768){
			$("#collapsable-nav").collapse('hide');
		}
	}); 

	$("#btn").click(function (event) {
    $(event.target).focus();
});

});*/


(function(global){

	var dc={};

	var homeHtml="snippets/home-snippet.html";

	var insertHtml=function(selector,html){
		var targetElem=document.querySelector(selector);
		targetElem.innerHTML=html;
	}

	var showLoading=function(selector){
		var html="div class='tex-center'>";
		html+="<img src='images/spin.gif'></div>";
		insertHtml(selector,html);
	}



document.addEventListener("DOMContentLoaded",function(event){
	showLoading("#main-content");

	$ajaxUtils.sendGetRequest(
		homeHtml, function(responseText){
			document.querySelector("#main-content").innerHTML=responseText;
		},false);
});



	global.$dc=dc;
})(window);
