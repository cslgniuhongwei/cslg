$(function(){
	init();
  handle = setInterval("changmyworld();",1000);
})

function init(){
       bianse();
       xiala();
       changimg();
}

 var availableTags = [
"淮安",
"南京",
"上海",
"常熟",
"徐州",
"连云港",
"宿迁",
"盐城",
"扬州",
"泰州",
"南通",
"镇江",
"常州",
"无锡",
"苏州",
"Aisp",
"Berl",
"CHP",
"Dython",
"Euby",
"Fcala",
"Hcela",
"Jcqla",
"Scwla",
"Gcheme"
];

function bianse(){
     $(".headspan").hover(function(){
             $(this).css("color","rgb(255,102,0)");
     },function(){
            $(this).css("color"," rgb(85, 85, 85)");
     });

	$(".caidandiv").hover(function(){
        $(this).css("background-color","rgb(75, 123, 218)");
        $(this).find(".headspan2").css("color","rgb(255,255,255)");    

	},function(){
           $(this).css("background-color","rgb(255, 255, 255)");
        $(this).find(".headspan2").css("color","rgb(85,85,85)");    
	});
}

function xiala(){

	$("#headli1").hover(function(){
		  $("#caidan").show();
		  $("#b").css("background-image","url('image/header_v7.png')");
		  $("#b").css("background-position","-50px -59px");
          $("#headli1").css("border","1px solid rgb(214, 214, 214)"); 
          $("#headli1").css("background-image","none");
          $("#headli2").css("background-image","none");
          $("#dddd").css("border-bottom","1px solid rgb(214, 214, 214)");
          $("#sl").css("color","rgb(255,102,0)"); 

	},function(){
		  $("#caidan").hide();
		  $("#b").css("background-image","url('image/header_v7.png')");
		  $("#b").css("background-position"," -64px -59px");
          $("#headli1").css("border","1px solid rgb(255, 255, 255)"); 
          $("#headli1").css("background-image","url('image/header_v7.png')");
          $("#headli2").css("background-image","url('image/header_v7.png')");
          $("#dddd").css("border-bottom","none");
          $("#sl").css("color","rgb(85, 85, 85)"); 
	});

	$(".hend").hover(function(){
          $(this).find(".henda").css("background-image","url('image/header_v7.png')");
          $(this).find(".henda").css("background-position","0px -136px");
	},function(){

          $(this).find(".henda").css("background-image","none");
          
	});

  
  $(".conlef1ddd").hover(function(){
       var s=$(this).attr("isclick");
    if (s=="no") {

      $(this).css("background-color","rgb(241, 252, 251)");
    };
      
  },function(){
      var s=$(this).attr("isclick");
      if (s=="no") {
        
         $(this).css("background-color","rgb(227, 249, 248)");
      };
     
   
      
  });

   $(".conlef1ddd").click(function(){
     $(".conlef1ddd").attr("isclick","no");
      $(".conlef1ddd").css("border-right","1px solid rgb(186, 234, 231)");
     $(".conlef1ddd").css("background-color","rgb(227, 249, 248)");
     $(this).css("background-color","rgb(255, 255, 255)");
     $(this).css("border-right","none");
     $(this).attr("isclick","yes");
   });

   $("#sssss").datepicker({});

   $("#conl1d2_centerd2").hover(function(){
            $("#conl1d2_centerd2").css("background-position","0px -30px"); 
   },function(){
             $("#conl1d2_centerd2").css("background-position","0px 0px"); 
   });

   $(".cl3btomcenter").hover(function(){
    $(this).css("color","rgb(255,102,0)");
   },function(){
     $(this).css("color","rgb(85,85,85)");
   });

   $("#goleft").hover(function(){
       $("#goleft").css("background-position","0px -40px");
       clearInterval(handle); 
   },function(){
       $("#goleft").css("background-position","0px 0px"); 
       handle = setInterval("changmyworld();",1000);
   });

   $("#goright").hover(function(){
       $("#goright").css("background-position","0px -120px"); 
        clearInterval(handle); 
   },function(){
       $("#goright").css("background-position","0px -80px"); 
        handle = setInterval("changmyworld();",1000);
   });

   $(".divllltop").hover(function(){
           $(this).css("color","rgb(255, 102, 0)");
   },function(){
           $(this).css("color","rgb(85, 85, 85)");
   });

    $(".gaoduan").hover(function(){
           $(this).find(".xiazai").hide();
           $(this).find(".yincang").show();
   },function(){
           $(this).find(".xiazai").show();
           $(this).find(".yincang").hide();
   });

    $(".concent_right2d").hover(function(){
          $(".concent_right2d").css("color","rgb(255,102,0)");
    },function(){
           $(".concent_right2d").css("color","rgb(0, 105, 202)");
    });

    $(".kls").hover(function(){
          $(this).css("color","rgb(255,102,0)");
    },function(){
           $(this).css("color","rgb(85, 85, 85)");
    });

     $(".klg").hover(function(){
          $(this).css("color","rgb(255,102,0)");
    },function(){
           $(this).css("color","rgb(85, 85, 85)");
    });

    $("#gameover1").autocomplete({
       source: availableTags
    });
     $("#gameover2").autocomplete({
       source: availableTags
    });
     
   
}


   var index =3999;
function changimg(){
    
    $("#goleft").click(function(){
         index=index-1;
       var s=index%4+1;
        $(".xiaoxin").hide();
       if (s==1) {
           $("#xiaoxin1").show();
        $("#concent_left4").css("background-image","url('image/13799087809630.jpg')")
      };
       if (s==2) {
        $("#xiaoxin2").show();
        $("#concent_left4").css("background-image","url('image/13799087795988.jpg')")
      };
       if (s==3) {
        $("#xiaoxin3").show();
        $("#concent_left4").css("background-image","url('image/13799087799260.jpg')")
      };
       if (s==4) {
        $("#xiaoxin4").show();
        $("#concent_left4").css("background-image","url('image/13799168295970.jpg')")
     };
    });
   $("#goright").click(function(){
         index=index+1;
       var s=index%4+1;
        $(".xiaoxin").hide();
       if (s==1) {
          $("#xiaoxin1").show();
        $("#concent_left4").css("background-image","url('image/13799087809630.jpg')")};
       if (s==2) {
            $("#xiaoxin2").show();
        $("#concent_left4").css("background-image","url('image/13799087795988.jpg')")};
       if (s==3) {
              $("#xiaoxin3").show();
        $("#concent_left4").css("background-image","url('image/13799087799260.jpg')")};
       if (s==4) {
                $("#xiaoxin4").show();
        $("#concent_left4").css("background-image","url('image/13799168295970.jpg')")};
    });


}
 

function changmyworld(){
         index++;

         var s=index%4+1;
         $(".xiaoxin").hide();
       if (s==1) {
          $("#xiaoxin1").show();
        $("#concent_left4").css("background-image","url('image/13799087809630.jpg')")};
       if (s==2) {
            $("#xiaoxin2").show();
        $("#concent_left4").css("background-image","url('image/13799087795988.jpg')")};
       if (s==3) {
              $("#xiaoxin3").show();
        $("#concent_left4").css("background-image","url('image/13799087799260.jpg')")};
       if (s==4) {
                $("#xiaoxin4").show();
        $("#concent_left4").css("background-image","url('image/13799168295970.jpg')")};
    
        
}