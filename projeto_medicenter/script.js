function mostrar(){
    if(document.querySelector(".menu nav ul").style.display=='flex'){
        document.querySelector(".menu nav ul").style.display = 'none';
    }else{
        document.querySelector(".menu nav ul").style.display = 'flex';
    }    
}
function show(){
    if(document.querySelector("header .menub").style.display == 'none'){
        document.querySelector(".menu nav ul").style.display = 'flex';

    }
    
}