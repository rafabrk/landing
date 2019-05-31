var y = 0;
document.onscroll = function(ev){    
    if( window.pageYOffset <= 1032 ){
        document.body.style="background-position-y: " + (window.pageYOffset / 4) * -1 + "px";
    } 

    var business__info = document.querySelector(".business__info");
    business__info.style = "transform:translateY(" + (window.pageYOffset / 4) * -1 + "px)";


    
}
