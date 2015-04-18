/* 
written by :akshaynathr
 */

screen_width=screen.width;
screen_height=window.height;

 


function load()
{
   $('#workspace').css('height',screen_height+'px');
 
   
}

$( document ).ready(load);

//$(document).ready(function(){$('#preloader').show(); $('#workspace').load('pages/page2.html #home');$('#preloader').fadeOut('slow');
  //          $('#sidebar').toggleClass('open');

//$('#sidebar').animate({left:"0px"},1000);
//});

//resizes on load
$(document).ready(function(){ 
    $('#workspace').height($(window).height()-40);

  $('#rightbar').height($(window).height()-40);  
});

//resizes on window change
$(window).resize(function(){ var w=$(window).height();
    
  $('#workspace').height($(window).height()-40);

  $('#rightbar').height($(window).height()-40);  

});


$(window).load(function() {
		// Animate loader off screen
		$("#preloader").fadeOut("slow");;
	});

$(document).ready(function()
{ //smooth scrolling 
    var page = $('#workspace');  // set to the main content of the page   
    $(window).mousewheel(function(event, delta, deltaX, deltaY){
        if (delta < 0) page.scrollTop(page.scrollTop() + 65);
        else if (delta > 0) page.scrollTop(page.scrollTop() - 65);
        return false;
    });
    
    
            //adjusting workspace size
    var w=$(window).height();
    
  $('#workspace').height($(window).height()-40);
    $('#sidebar').on('click',function(event){
        
        
    
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
        $('#events').on('click',function(){ $('#preloader').show(); $('#workspace').load('timeline.html');$('#preloader').fadeOut('slow');});
        
        
        
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