$(function(){
	init();
	handle = setInterval("changmyworld();",1000);
});
var index=0;

function init(){

	changcolor();
	changimg();
}

function changcolor(){
        $(".lops").hover(function(){
      $(this).find(".mengban").show();
  },function(){
      $(this).find(".mengban").hide();
  });



        $("#lzsb11").hover(function(){
       $("#lzsb11").css("background-image","url('image/weibo.jpg')")
      $("#lzsb11").css("background-position","0% -105px");
  },function(){
      $("#lzsb11").css("background-image","none")
  });
          $("#lzsb22").hover(function(){
       $("#lzsb22").css("background-image","url('image/weibo.jpg')")
      $("#lzsb22").css("background-position","-109px -105px");
  },function(){
      $("#lzsb22").css("background-image","none")
  });
            $("#lzsb33").hover(function(){
       $("#lzsb33").css("background-image","url('image/weibo.jpg')")
      $("#lzsb33").css("background-position","-217px -105px");
  },function(){
      $("#lzsb33").css("background-image","none")
  });
     
      $("#kefu2a1").hover(function(){
       $("#kefu2a1").css("background-image","url('image/kefu2.jpg')")
      $("#kefu2a1").css("background-position","-1px -83px");
  },function(){
      $("#kefu2a1").css("background-image","none")
  });
      
      $("#kefu2a2").hover(function(){
       $("#kefu2a2").css("background-image","url('image/kefu2.jpg')")
      $("#kefu2a2").css("background-position","-82px -83px");
  },function(){
      $("#kefu2a2").css("background-image","none")
  });
      $("#kefu2a3").hover(function(){
       $("#kefu2a3").css("background-image","url('image/kefu2.jpg')")
      $("#kefu2a3").css("background-position","-163px -83px");
  },function(){
      $("#kefu2a3").css("background-image","none")
  });
      $("#kefu2a4").hover(function(){
       $("#kefu2a4").css("background-image","url('image/kefu2.jpg')")
      $("#kefu2a4").css("background-position","-244px -83px");
  },function(){
      $("#kefu2a4").css("background-image","none")
  });


     $("#lzsb1").hover(function(){
       $("#lzsb1").css("background-image","url('image/yx_nav.jpg')")
      $("#lzsb1").css("background-position","-0px -56px");
  },function(){
      $("#lzsb1").css("background-image","none")
  });

      $("#lzsb2").hover(function(){
       $("#lzsb2").css("background-image","url('image/yx_nav.jpg')")
      $("#lzsb2").css("background-position","-107px -56px");
  },function(){
      $("#lzsb2").css("background-image","none")
  });

       $("#lzsb3").hover(function(){
       $("#lzsb3").css("background-image","url('image/yx_nav.jpg')")
      $("#lzsb3").css("background-position","-214px -56px");
  },function(){
      $("#lzsb3").css("background-image","none")
  });


    $(".cnm3").hover(function(){
      $(this).css("color","rgb(204, 204, 204);");
  },function(){
      $(this).css("color","rgb(149, 149, 149)");
  });
    

    $(".likefuo").hover(function(){
      $(this).css("color","rgb(204, 204, 204);");
  },function(){
      $(this).css("color","rgb(137, 137, 137)");
  });

     $(".moppp2").hover(function(){
      $(this).css("color","rgb(204, 204, 204);");
  },function(){
      $(this).css("color","rgb(139, 139, 139)");
  });
	
   $(".piaofu100").hover(function(){
      $(this).css("color","rgb(204, 204, 204);");
  },function(){
      $(this).css("color","rgb(149, 149, 149)");
  });



  $(".zhucea").hover(function(){
      $(this).css("color","rgb(125, 125, 125);");
	},function(){
      $(this).css("color","rgb(103, 103, 103)");
	});
     
  $(".shipin2dd2").hover(function(){
      $(this).css("color","rgb(189, 164, 92);");
  },function(){
      $(this).css("color","rgb(179, 136, 76)");
  });
     

  $(".span1").hover(function(){
      $(this).css("color","rgb(204, 204, 204);");
  },function(){
      $(this).css("color","rgb(82, 82, 82)");
  });

     $("#piaofu").hover(function(){
      $("#piaofu").css("color","rgb(204, 204, 204);");
  },function(){
     $("#piaofu").css("color","rgb(85, 85, 85)");
  });

       $("#piaofu1000").hover(function(){
      $("#piaofu1000").css("color","rgb(204, 204, 204);");
  },function(){
     $("#piaofu1000").css("color","rgb(85, 85, 85)");
  });

       $("#piaofu2").hover(function(){
      $("#piaofu2").css("color","rgb(204, 204, 204);");
  },function(){
     $("#piaofu2").css("color","rgb(85, 85, 85)");
  });

        $("#piaofu3").hover(function(){
      $("#piaofu3").css("color","rgb(204, 204, 204);");
  },function(){
     $("#piaofu3").css("color","rgb(85, 85, 85)");
  });

       $("#piaofu4").hover(function(){
      $("#piaofu4").css("color","rgb(204, 204, 204);");
  },function(){
     $("#piaofu4").css("color","rgb(85, 85, 85)");
  });

       $("#piaofu5").hover(function(){
      $("#piaofu5").css("color","rgb(204, 204, 204);");
  },function(){
     $("#piaofu5").css("color","rgb(85, 85, 85)");
  });


    $(".shita").hover(function(){
      $(this).css("color","rgb(204, 204, 204)");
	},function(){
      $(this).css("color","rgb(103, 103, 103)");
	});
     

     $(".shitb").hover(function(){
      $(this).css("color","rgb(189, 164, 92)");
	},function(){
      $(this).css("color","rgb(144, 104, 49)");
	});

      $("#guoming").hover(function(){
      $("#guoming").css("color","rgb(189, 164, 92)");
  },function(){
      $("#guoming").css("color","rgb(144, 104, 49)");
  });


    $(".c2d11").hover(function(){
      $(this).css("background-position","0px -46px");
	},function(){
      $(this).css("background-position","0px 0px");
	});


	$(".xwlba").hover(function(){
      $(this).css("color","rgb(176, 41, 14)");
	},function(){
      $(this).css("color","rgb(153, 153, 153)");
	});

	$(".c3chead2d1").hover(function(){
		var s=$(this).attr("xia");
        if (s==1) {
          	$(this).css("background-image","url('image/main_nav.jpg')");
          };
          if (s==2) {
          	$(this).css("background-image","url('image/main_nav.jpg')");
          	$(this).css("background-position","-230px 0%");
          };
          if (s==3) {
          	$(this).css("background-image","url('image/main_nav.jpg')");
          	$(this).css("background-position","-460px 0%");
          };
          if (s==4) {
          	$(this).css("background-image","url('image/main_nav.jpg')");
          	$(this).css("background-position","-690px 0%");
          };

	},function(){
      $(".c3chead2d1").css("background-image","none");
	});

	$(".concent11bottom2dd").hover(function(){
          var s=$(this).attr("fang");
          if (s==1) {
          	$(this).css("background-image","url('image/nav_1.jpg')");
          };
          if (s==2) {
          	$(this).css("background-image","url('image/nav_2.jpg')");
          	$(this).find(".xinwenliebiao").show();
          };
          if (s==3) {
          	$(this).css("background-image","url('image/nav_3.jpg')");
          };
          if (s==4) {
          	$(this).css("background-image","url('image/nav_4.jpg')");
          };
          if (s==5) {
          	$(this).css("background-image","url('image/nav_5.jpg')");
          	$(this).find(".xinwenliebiao").show();
          };
          if (s==6) {
          	$(this).css("background-image","url('image/nav_6.jpg')");
          };
          if (s==7) {
          	$(this).css("background-image","url('image/nav_7.jpg')");
          	$(this).find(".xinwenliebiao").show();
          };
          if (s==8) {
          	$(this).css("background-image","url('image/nav_8.jpg')");
          };
	},function(){
            $(this).css("background-image","none");
            $(".xinwenliebiao").hide();
	});
}



function changimg(){
    $(".yundong1").hover(function(){
    	 clearInterval(handle); 
    	 $(".yundong1").css("background-image","url('image/lunbo_nav01.png')");
         var k=$(this).attr("xuanze");
         index = parseInt(k);
          $(this).css("background-image","url('image/lunbo_nav02.png')");
         if (k==1) {
             $("#tupian").css("background-image","url('image/10251377245343885.jpg')");

         };
         if (k==2) {
             $("#tupian").css("background-image","url('image/10251377255936403.jpg')");

         };
         if (k==3) {
             $("#tupian").css("background-image","url('image/10251379834185689.jpg')");

         };
         if (k==4) {
             $("#tupian").css("background-image","url('image/10251380008467802.jpg')");

         };
         if (k==5) {
             $("#tupian").css("background-image","url('image/10251380036118635.jpg')");

         };


    },function(){
          
          handle = setInterval("changmyworld();",1000);

    })
}


function changmyworld(){
        
        var l=index%5 + 1;
        $(".yundong1").css("background-image","url('image/lunbo_nav01.png')");
        if (l==1) {
             $("#tupian").css("background-image","url('image/10251377245343885.jpg')");
             $("#y1").css("background-image","url('image/lunbo_nav02.png')");
         };
         if (l==2) {
             $("#tupian").css("background-image","url('image/10251377255936403.jpg')");
             $("#y2").css("background-image","url('image/lunbo_nav02.png')");
         };
         if (l==3) {
             $("#tupian").css("background-image","url('image/10251379834185689.jpg')");
             $("#y3").css("background-image","url('image/lunbo_nav02.png')");
         };
         if (l==4) {
             $("#tupian").css("background-image","url('image/10251380008467802.jpg')");
             $("#y4").css("background-image","url('image/lunbo_nav02.png')");
         };
         if (l==5) {
             $("#tupian").css("background-image","url('image/10251380036118635.jpg')");
             $("#y5").css("background-image","url('image/lunbo_nav02.png')");
         };
        index=index + 1;
}