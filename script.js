function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function changeText(){
    var id=document.getElementsByName("button")[0].id;
    if(id==1){
        document.getElementById("text").innerHTML="Learn it";
        document.getElementsByName("button")[0].id=0;
    }
    else{
        document.getElementById("text").innerHTML="Fuck it";
        document.getElementsByName("button")[0].id=1;
    }
}