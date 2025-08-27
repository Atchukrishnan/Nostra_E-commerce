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
//Slide
var slider = document.querySelector(".slider")
var sliderImg = document.querySelector(".slider-img")
var sliderContent = document.querySelector(".slider-content")
var prevBtn = document.getElementById("leftAngle")
var nextBtn = document.getElementById("rightAngle")

var slidermargin = 0
nextBtn.addEventListener("click",function(){
    slidermargin = slidermargin + 100
    if(slidermargin>200){
        slidermargin=0
        sliderImg.style.marginLeft = 0
    }
    else{
        sliderImg.style.marginLeft = "-" + slidermargin + "%"
    }
})
prevBtn.addEventListener("click",function(){
    if(slidermargin == 0){
        slidermargin = 200
        sliderImg.style.marginLeft = "-" + slidermargin + "%"
    }
    else{
        slidermargin = slidermargin - 100
        sliderImg.style.marginLeft = "-" + slidermargin + "%"
    }
})
//Most wanted Section
var mostWanted = document.getElementById("mostWanted")
var wanted_sec = document.querySelectorAll(".wanted_section .most_wanted")
var hearts = document.querySelectorAll(".heart")
console.log(hearts)

hearts.forEach((heart)=>{
    heart.addEventListener("click",()=>{
        if(heart.classList.contains("fa-regular")){
            heart.classList.replace("fa-regular","fa-solid");
            heart.style.color = "red"
        }
        else{
            heart.classList.replace("fa-solid","fa-regular");
            heart.style.color = ""
        }
    })

})

