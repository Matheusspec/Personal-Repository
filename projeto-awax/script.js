function showmenu(){
    let menu =  document.querySelector('.menu');
    let body = document.getElementById('body');
    let button = document.querySelector('.nav-botton');
    let link = document.querySelector('.list')

    if(Number(body.style.width) < 1024){
        if(menu.style.width == '70vw'){
            menu.style.width = '0px';
            menu.style.visibility = 'hidden'
            button.style.transform = 'rotate(0deg)'
            link.style.opacity = '0'
        }
        else{
            menu.style.width = '70vw'
            menu.style.visibility = 'visible'
            button.style.transform = 'rotate(90deg)';
            link.style.opacity = '1 '
        }
    }    
}

function current(n,b) {
    showSlides(n,b);
}

function showSlides(n,b) {
    var i;
    let slides = document.querySelectorAll('.sliders')
    var dots = document.getElementsByClassName("pointer");
    

    if(b == 1){
        for (i = 0; i < 3; i++) {
            dots[i].className = dots[i].className.replace(" pointer-active", "");
        }
        
        standard(dots, n, slides,0,0);
    }
    if(b == 2){
        for (i = 3; i < 6; i++) {
            dots[i].className = dots[i].className.replace(" pointer-active", "");
        }

        standard(dots, n, slides,3,1);
    }
    if(b == 3){
        for (i = 6; i < 9; i++) {
            dots[i].className = dots[i].className.replace(" pointer-active", "");
        }
        
        standard(dots, n, slides,6,2);
    
    }
    if(b == 4){
        for (i = 9; i < 12; i++) {
            dots[i].className = dots[i].className.replace(" pointer-active", "");
        }
        standard(dots, n, slides,9,3);
    }
    
}

function standard(dots, n, slides,i,j) {
    dots[(n + i) - 1].className += " pointer-active";
    if (n == 1)
        slides[j].style.marginLeft = "0";
    else if (n == 2)
        slides[j].style.marginLeft = "-100vw";
    else
        slides[j].style.marginLeft = "-200vw";
}

function  form(){
    var inputs = document.querySelectorAll(".input");
    var titles = document.querySelectorAll(".input-name")
    let cont = 0;
    for(i = 0; i < 4; i++){
        if(inputs[i].value > '0')
            titles[i].style.transform  = 'translateY(-5px)'
        }
    for(i = 0; i < 4; i++){
        if(inputs[i].value < '0')
            titles[i].style.transform  = 'translateY(9px)'
    }
    
}