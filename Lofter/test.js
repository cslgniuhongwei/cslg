$(function(){
    
    initEleEvent();


})

function showflag(name){
      
     
     $(".sanjiao").css("display","none");
     var name=name;
     var k= $(name).attr("openF");
      
      if (k=="no") {
         $("#btncon").slideDown(100);
         $(name).find(".sanjiao").show();
         $("#div1").css("paddingTop","10px"); 
         $(".ddd").attr("openF","no");
         $(name).attr("openF","yes");
         $("#btnconent").hide();
         $("#zccon").hide();
         if (name=="#div2btn") {$("#btnconent").show();
       }
       if (name=="#div2zc"){
              
              $("#zccon").show();
       };
         
      }else{
         $("#btncon").hide();
         $(name).find(".sanjiao").hide();
         $("#div1").css("paddingTop","100px");
         $("#btnconent").hide();
          $("#zccon").hide();
         $(name).attr("openF","no");

      }


}
function initEleEvent(){
         var js=0;
     $(".picck").click(function(){
        
        if (js==0) {
          $("#piccheck").css("background-image","url('image/captcha.jpgx2.jpg')");
           js=1;
        }else{
          $("#piccheck").css("background-image","url('image/captcha.jpgx.jpg')");
          js=0;
        };

     }); 


     $(".smaimg").hover(function(){
      $(this).find(".zhedang").css("background-color","rgba(119, 119, 119,0.5)");
     },function(){
      $(this).find(".zhedang").css("background-color","");  
     });


    $("#div2ll").click(function(){
      $("#bgimg").slideUp(200);
      $("#content").slideUp(200);
      $("#liulan").slideDown(200);

      $(".ddd").attr("openF","no");
      $("#div1").css("paddingTop","100px"); 
      $("#btnconent").hide();
      $("#zccon").hide();
      $(".sanjiao").css("display","none");
    });

    $("#ll1d4").click(function(){
      $("#bgimg").slideDown(200);
      $("#content").slideDown(200);
      $("#div1").css("paddingTop","10px"); 
      $("#liulan").slideUp(200);
      $("#btncon").slideDown(100);
       $("#zccon").show();
       $("#div2zc").find(".sanjiao").show();
       $("#div2zc").attr("openF","yes");
       

    });

     $("#liulan52").click(function(){
      $("#bgimg").slideDown(200);
      $("#content").slideDown(200);
      $("#div1").css("paddingTop","10px"); 
      $("#liulan").slideUp(200);
      $("#btncon").slideDown(100);
       $("#zccon").show();
       $("#div2zc").find(".sanjiao").show();
       $("#div2zc").attr("openF","yes");

    });

      $("#ll1d1a").click(function(){
      $("#bgimg").slideDown(200);
      $("#content").slideDown(200);
      $("#div1").css("paddingTop","10px"); 
      $("#liulan").slideUp(200);
      $("#btncon").slideDown(100);
       $("#btnconent").show();
       $("#div2btn").find(".sanjiao").show();
       $("#div2btn").attr("openF","yes");
       
    });


  

    $("#div2btn").click(function(){
      
     showflag("#div2btn");
         
    });
     $("#div2zc").click(function(){
      
     showflag("#div2zc");
         
    });

      $(".loja").hover(
      function(){
        $(this).css("background-position","-175px -1190px");
      },function(){
        $(this).css("background-position","0px -1190px"); 
      }
    );


    $("#ll1d4").hover(
      function(){
        $("#ll1d4").css("background-position","0px -1137px");
      },function(){
        $("#ll1d4").css("background-position","0px -1084px"); 
      }
    );

     $("#liulan52").hover(
      function(){
        $("#liulan52").css("background-position","0px -1137px");
      },function(){
        $("#liulan52").css("background-position","0px -1084px"); 
      }
    );

    $("#li13").hover(
      function(){
        $("#li13").css("background-position","0px -923px");
      },function(){
        $("#li13").css("background-position","0px -869px"); 
      }
    );


    $("#div2btn").hover(
      function(){
        $("#div2btn").css("background-position","-201px -195px");
      },function(){
        $("#div2btn").css("background-position","-1px -195px"); 
      }
    );
     $("#div2zc").hover(
      function(){
        $("#div2zc").css("background-position","-201px -261px");
      },function(){
        $("#div2zc").css("background-position","-1px -261px"); 
      }
    );
      $("#div2ll").hover(
      function(){
        $("#div2ll").css("background-position","-201px -327px");
      },function(){
        $("#div2ll").css("background-position","-1px -327px"); 
      }
    );

      $("#li111").hover(
      function(){
        $("#li111").css("background-position","-202px -505px");
      },function(){
        $("#li111").css("background-position","-2px -505px"); 
      }
    );
      $("#li122").hover(
      function(){
        $("#li122").css("background-position","-202px -559px");
      },function(){
        $("#li122").css("background-position","-2px -559px"); 
      }
    );
     $("#li133").hover(
      function(){
        $("#li133").css("background-position","-202px -614px");
      },function(){
        $("#li133").css("background-position","-2px -614px"); 
      }
    );
    $("#li1111").hover(
      function(){
        $("#li1111").css("background-position","-202px -505px");
      },function(){
        $("#li1111").css("background-position","-2px -505px"); 
      }
    );
      $("#li1222").hover(
      function(){
        $("#li1222").css("background-position","-202px -559px");
      },function(){
        $("#li1222").css("background-position","-2px -559px"); 
      }
    );
     $("#li1333").hover(
      function(){
        $("#li1333").css("background-position","-202px -614px");
      },function(){
        $("#li1333").css("background-position","-2px -614px"); 
      }
    );
       $("#li124").hover(
      function(){
        $("#li124").css("background-position","-2px -1030px");
      },function(){
        $("#li124").css("background-position","-2px -977px"); 
      }
    );
      $("#picgx").hover(
      function(){
        $("#picgx").css("background-position","-224px -656px");
      },function(){
        $("#picgx").css("background-position","-174px -656px"); 
      }
    );

    $("#txt1").keyup(function(){
      var val=$("#txt1").val();
      if (val=="") {
        $("#label1").css("display","block");
      }else{
        $("#label1").hide();
      };
    });
    $("#txt2").keyup(function(){
      var val=$("#txt2").val();
      if (val=="") {
        $("#label2").css("display","block");
      }else{
        $("#label2").hide();
      };
    });
      $("#txt3").keyup(function(){
      var val=$("#txt3").val();
      if (val=="") {
        $("#label3").css("display","block");
      }else{
        $("#label3").hide();
      };
    });
    $("#txt4").keyup(function(){
      var val=$("#txt4").val();
      if (val=="") {
        $("#label4").css("display","block");
      }else{
        $("#label4").hide();
      };
    });
    $("#txt5").keyup(function(){
      var val=$("#txt5").val();
      if (val=="") {
        $("#label5").css("display","block");
      }else{
        $("#label5").hide();
      };
    });
    $("#xuanze").click(function(){
          var ch= $("#xuanze").attr("xuanze");
          if (ch=="unchecked") {
              $("#xuanze").css("background-position","-110px -667px");
              $("#xuanze").attr("xuanze","checked"); 
               $("#rempasw").attr("xuanze","checked");  
            }else{
              $("#xuanze").css("background-position","-84px -667px"); 
              $("#xuanze").attr("xuanze","unchecked");
              $("#rempasw").attr("xuanze","unchecked");    
            };
    
    });

     $("#rempasw").click(function(){
          var ch= $("#rempasw").attr("xuanze");
          if (ch=="unchecked") {
              $("#xuanze").css("background-position","-110px -667px");
              $("#rempasw").attr("xuanze","checked"); 
              $("#xuanze").attr("xuanze","checked");   
            }else{
              $("#xuanze").css("background-position","-84px -667px"); 
              $("#rempasw").attr("xuanze","unchecked");
               $("#xuanze").attr("xuanze","unchecked");     
            };
    
    });
}

