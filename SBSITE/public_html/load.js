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
         //else
        // { sidebar.animate({left:-sidebarwidth},250);  }
        
        
         $('#page2').on('click',function(){$('#workspace').load('pages/page2.html');});
       
    });
    
}
        
        
        
        );

function close(){ var s=$('#sidebar');        var sidebarwidth=$('#sidebar').width();
 {s.animate({left:-sidebarwidth},250);} }
 
 

 
 