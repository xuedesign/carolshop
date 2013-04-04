// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;


//主選單效果
$(function(){
	$("ul.navigation > li:has(ul) > a").append('<div class="arrow-bottom"></div>');
	$("ul.navigation > li ul li:has(ul) > a").append('<div class="arrow-right"></div>');
});


//首頁banner滑動
$(function(){
		$('#banner_main').cycle({ 
			fx:'scrollLeft',
			pager:'#banner_btn'
		});
	})


//首頁文字輪播	
$(document).ready(
	function(){
		$('#news').innerfade({
		   animationtype: 'slide',
		   speed: 750,
		   timeout: 2500,
		   type: 'random',
		   containerheight: '1em'
     });
});


//圖片延遲載入
$(function() {
          $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });

//
$("#accordion > li > h3").click(function(){

	if(false == $(this).next().is(':visible')) {
		$('#accordion ul').slideUp(300);
	}
	$(this).next().slideToggle(300);
});

$('#accordion ul:eq(0)').show();