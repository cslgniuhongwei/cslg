$(function(){

	init();
  handle=setInterval("changimg();","2000");
});

var index=49999;

function init(){

	$(".topbarcon2div").hover(function(){
        $(this).css("background-color","rgb(5, 5, 5)");
        $(this).find(".piaofu").slideDown(300);
        $(this).find(".topbarcon2span1").css("color","rgb(204, 255, 153)");
        $(this).find(".topbarcon2span2").css("background-position","-231px -18px");
	},function(){
       $(this).css("background-color","transparent");
       $(this).find(".piaofu").slideUp(300);
       $(this).find(".topbarcon2span1").css("color","rgb(204, 204, 204)");
       $(this).find(".topbarcon2span2").css("background-position","-223px -18px");
	});
	$(".topbarcon2divxiao").hover(function(){
		       $(this).css("background-color","rgb(5, 5, 5)");
             $(this).find(".topbarcon2span3").css("color","rgb(204, 255, 153)");
	},function(){
		$(this).css("background-color","transparent");
             $(this).find(".topbarcon2span3").css("color","rgb(204, 204, 204)");
	});

	$(".piaofud").hover(function(){
        $(this).css("background-color","rgb(90, 132, 10)");
        $(this).css("color","rgb(255, 255, 255)");
       
	},function(){
        $(this).css("background-color","rgba(51, 51, 51,0.9)");
        $(this).css("color","rgb(204, 204, 204)");
	});

	$(".denglu").hover(function(){
        
        $(this).css("color","rgb(204, 255, 153)");
       
	},function(){
        
        $(this).css("color","rgb(204, 204, 204)");
	});

    $(".contenttop2a").hover(function(){
        
        $(this).css("color","rgb(255, 255, 255)");
        $(this).css("background-color","rgb(102, 153, 0)");
  },function(){
        
        $(this).css("color","rgb(102, 102, 102)");
         $(this).css("background-color","transparent");
  });



    $(".mainimg").hover(function(){
        
        $(this).css("border","1px solid rgb(180, 200, 139)");
        $(this).css("box-shadow","0px 0px 3px rgb(102, 153, 0)");
        $(this).find(".bofang").show();
  },function(){
        
        $(this).css("border","1px solid rgb(242, 242, 242)");
        $(this).css("box-shadow","0px 0px 0px rgb(242, 242, 242)");
        $(this).find(".bofang").hide();
  });

    
    $(".centerimg1").hover(function(){
        
        $(this).css("border","1px solid rgb(180, 200, 139)");
        $(this).css("box-shadow","0px 0px 3px rgb(102, 153, 0)");
        $(this).find(".bofang").show();
  },function(){
        
        $(this).css("border","1px solid rgb(242, 242, 242)");
        $(this).css("box-shadow","0px 0px 0px rgb(242, 242, 242)");
        $(this).find(".bofang").hide();
  });



  $("#xiangzuo").hover(function(){

         clearInterval(handle);
         $("#xiangzuo").css("background-position","0px -144px");
       
  },function(){
        
         $("#xiangzuo").css("background-position","0px 0px");
          handle=setInterval("changimg();","2000");
  });
  

  $("#xiangyou").hover(function(){
         clearInterval(handle);
         $("#xiangyou").css("background-position","0px -216px");
       
  },function(){
        
         $("#xiangyou").css("background-position","0px -72px");
          handle=setInterval("changimg();","2000");
  });



  $(".liebiaoa").hover(function(){
         var m=$(this).attr("snk");
         index=parseInt(m)-1+40000;
         xianshi();
         $(".liebiaoa").css("color","rgb(255,255,255)");
         clearInterval(handle);
         $(this).css("color","rgb(153, 204, 0)");
       
  },function(){
        
         
          handle=setInterval("changimg();","2000");
  });


$("#xiangzuo").click(function(){
    index=index-1;
    xianshi();
});
$("#xiangyou").click(function(){
    index=index+1;
    xianshi();
});
}


function changimg(){
        
         index=index+1;
         xianshi();
        
      
}


function xianshi(){
          var k=Math.abs(index%10);
         $(".goodjob").hide();
         $(".liebiaoa").css("color","rgb(255, 255, 255)");
         $(".shuoming").hide();
         if (k==0) {
          $("#img1").show();
          $("#liebiaoa1").css("color","rgb(153, 204, 0)");
          $("#shuoming1").show();
         };
         if (k==1) {
          $("#img2").show();
          $("#liebiaoa2").css("color","rgb(153, 204, 0)");
          $("#shuoming2").show();
         };
         if (k==2) {
          $("#img3").show();
          $("#liebiaoa3").css("color","rgb(153, 204, 0)");
          $("#shuoming3").show();
         };
         if (k==3) {
          $("#img4").show();
          $("#liebiaoa4").css("color","rgb(153, 204, 0)");
          $("#shuoming4").show();
         };
         if (k==4) {
          $("#img5").show();
          $("#liebiaoa5").css("color","rgb(153, 204, 0)");
          $("#shuoming5").show();
         };
         if (k==5) {
          $("#img6").show();
          $("#liebiaoa6").css("color","rgb(153, 204, 0)");
          $("#shuoming6").show();
         };
         if (k==6) {
          $("#img7").show();
          $("#liebiaoa7").css("color","rgb(153, 204, 0)");
          $("#shuoming7").show();
         };
         if (k==7) {
          $("#img8").show();
          $("#liebiaoa8").css("color","rgb(153, 204, 0)");
          $("#shuoming8").show();
         };
         if (k==8) {
          $("#img9").show();
          $("#liebiaoa9").css("color","rgb(153, 204, 0)");
          $("#shuoming9").show();
         };
         if (k==9) {
          $("#img10").show();
          $("#liebiaoa10").css("color","rgb(153, 204, 0)");
          $("#shuoming10").show();
         };

}



