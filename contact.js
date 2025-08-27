//offerbar
var offerbar = document.querySelector(".offerbar")
var close = document.getElementById("close")

close.addEventListener("click",function(){
    offerbar.style.display = "none"
})
//Sidenavbar
var navbar = document.querySelector(".navbar")
var hamburgerIcon = document.getElementById("hamburger-icon")
var sideNavbar = document.querySelector(".sideNavbar")
var closeNavbar = document.getElementById("close-sidenavbar")

hamburgerIcon.addEventListener("click",function(){
    sideNavbar.style.left = "0%"
    
})
closeNavbar.addEventListener("click",function(){
    sideNavbar.style.left = "-70%"
    
})