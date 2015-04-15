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

$(window).load(function() {
		// Animate loader off screen
		$("#preloader").fadeOut("slow");;
	});

$(document).ready(function()
{
    $('#sidebar').on('click',function(event){
        
        event.preventDefault();
    
        var sidebar=$('#sidebar');
        var sidebarwidth=$('#sidebar').width();
        
        //toggle class
        sidebar.toggleClass('open');
        
        
        if(sidebar.hasClass('open'))
        {sidebar.animate({left:"0px"}); }
          else
          { sidebar.animate({left:-sidebarwidth},250);  }
        
        
         $('#page2').on('click',function(){ $('#preloader').show(); $('#workspace').load('pages/page2.html #page2');$('#preloader').fadeOut('slow');});
       
       
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