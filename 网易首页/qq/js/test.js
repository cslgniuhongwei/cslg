function test(index){
    var s;
    s = document.getElementById("test");
    
    s.style.backgroundColor="#ff0000";

}

function changcolor(index){
     var s;
     if (index==1) {	
    	 s=document.getElementById("yingyong");
    	s.style.backgroundColor="rgb(25,25,25)";
    };
     if (index==2) {	
    	 s=document.getElementById("styyj1");
    	s.style.backgroundColor="rgb(25,25,25)";
    };
     if (index==3) {	
    	 s=document.getElementById("styyj2");
    	s.style.backgroundColor="rgb(25,25,25)";
    };
     if (index==4) {	
    	 s=document.getElementById("styyj3");
    	s.style.backgroundColor="rgb(25,25,25)";
    };
    
    if (index==5) {	
    	 s=document.getElementById("styyj4");
    	s.style.backgroundColor="rgb(25,25,25)";
    };
    if (index==6) {	
    	 s=document.getElementById("yingyong");
    	s.style.backgroundColor="";
    };
    if (index==7) {	
    	 s=document.getElementById("styyj1");
    	s.style.backgroundColor="";
    };
    if (index==8) {	
    	 s=document.getElementById("styyj2");
    	s.style.backgroundColor="";
    };
    if (index==9) {	
    	 s=document.getElementById("styyj3");
    	s.style.backgroundColor="";
    };
    if (index==10) {	
    	 s=document.getElementById("styyj4");
    	s.style.backgroundColor="";
    };
     if (index==11) {	
    	 s=document.getElementById("btnenter");
    	s.style.backgroundColor="rgb(185,21,12)";
    };
    if (index==12) {	
    	 s=document.getElementById("btnenter");
    	s.style.backgroundColor="rgb(205,21,12)";
    };
}
function changimg(index){
       var s=document.getElementById("img1");
         if (index==1) {

         	s.src="image/2013090517193882b1e.jpg"; 
         };   
          if (index==2) {

         	s.src="image/2013090510023762f73.jpg"; 
         };
         if (index==3) {

         	s.src="image/20130905135130493c2.jpg"; 
         };
          if (index==4) {

         	s.src="image/201309060815239c2e0.jpg"; 
         }; 
}

function changconcent(index){
    var s = document.getElementById("nl2t2");
    var t = document.getElementById("nl2t2sd");
    var v = document.getElementById("nl2t2sd2");
    if (index==2) {
      
        t.style.display="none";
        
       
        v.style.display="none";
    };
}