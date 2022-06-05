var menubtn=document.getElementById("menubtn")
var menu=document.getElementById("menu")
var sidenav=document.getElementById("sidenav")

sidenav.style.right="-200px"
menubtn.onclick=function(){
    if(sidenav.style.right=="-200px"){
        sidenav.style.right="0"
        menu.src="./icon/icons8-close-48.png";
    }else{
        sidenav.style.right="-200px"
        menu.src="./icon/icons8-menu-48.png";
    }
}