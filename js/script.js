var y = 0;
document.onscroll = function(ev){    
    if( window.pageYOffset <= 1032 ){
        document.body.style="background-position-y: " + (window.pageYOffset / 4) * -1 + "px";
    } 

     
};
