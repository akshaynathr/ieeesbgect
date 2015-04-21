/* 
written by :akshaynathr
 */

screen_width=screen.width;
screen_height=window.height;

 



$( document ).ready(load);

//$(document).ready(function(){$('#preloader').show(); $('#workspace').load('pages/page2.html #home');$('#preloader').fadeOut('slow');
  //          $('#sidebar').toggleClass('open');

//$('#sidebar').animate({left:"0px"},1000);
//});



 

 
    
$(window).load(function() {
		// Animate loader off screen
		$("#preloader").fadeOut("slow");
               
	});

$(document).ready(function()
{  
    
    
           //menu bar open and close
     
    $('#sidebar').on('click',function(){
        
        
    
        var sidebar=$('#sidebar');
        var sidebarwidth=$('#sidebar').width()-15;
        
        //toggle class
        sidebar.toggleClass('open');
        
        
        if(sidebar.hasClass('open'))
        {sidebar.animate({left:"0px"}); }
          else
          { sidebar.animate({left:-sidebarwidth},250);  }
        
        //main menu loaders
         $('#home_nav').on('click',function(){ $('#preloader').show(); $('#workspace').load('pages/page2.html #home');$('#preloader').fadeOut('slow');});
        $('#events').on('click',function(){ $('#preloader').show(); $('#workspace').load('timeline.html #container');$('#preloader').fadeOut('slow');});
        
        
        
        //bottom menu loaders 
        $('#nav2').on('click',function(){ $('#preloader').show(); $('#workspace').load('pages/ras.html #ras');$('#preloader').fadeOut('slow');});
        $('#nav1').on('click',function(){  $('#preloader').show(); $('#workspace').load('pages/page2.html #home');$('#preloader').fadeOut('slow');});
       
        $('#nav3').on('click',function(){  $('#preloader').show(); $('#workspace').load('pages/KITES.html #kites');$('#preloader').fadeOut('slow');});
      
       $('load1').on('click',function(){});
    });
    
}
        
        
        
        );

function close(){ var s=$('#sidebar');        var sidebarwidth=$('#sidebar').width();
 {s.animate({left:-sidebarwidth},250);} }
 
 

$(function(){
    $('#la').slimScroll({
        height: '650px'
    });
});