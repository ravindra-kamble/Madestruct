const toggleBtn = document.querySelector(".toggle-btn");
const panelLayer1 = document.querySelector(".panel-svg");
const panelLayer2 = document.querySelector(".panel-svg1");
const panelCloseBtn = document.querySelector(".close-btn");
const mbNav = document.querySelector(".mb-nav");
const mainBody = document.querySelector("body");
let logoSection = document.querySelector(".picture-logo-mobile");

toggleBtn.addEventListener("click", function(){
    mbNav.classList.remove("animate__animated");
    mbNav.classList.remove("animate__fadeOut");
    mbNav.classList.add("show"); 
    document.body.style.overflowY = "hidden";
});

panelCloseBtn.addEventListener("click", function(){
        mbNav.classList.add('animate__animated', 'animate__bounceOutLeft');
        mbNav.classList.remove("show");
        document.body.style.overflowY = "scroll";
});

//scroll nav logo effect
window.addEventListener("scroll", function(){

 
 mbScrollActive();
 mbScrollActiveMid();

})

function mbScrollActive(){
    let position_scroll = window.scrollY>200;
    logoSection.classList.toggle("scrolling_active", position_scroll);  
    document.querySelector(".picture-logo-img").classList.toggle("scrolling_active_logo", position_scroll);
    toggleBtn.classList.toggle("toggle-btn-scroll", position_scroll);
}

function mbScrollActiveMid(){
    let position_scroll_mid = window.scrollY>500;
    logoSection.classList.toggle("scrolling_active_color", position_scroll_mid);
}
// expand services button and event

// let expandDown = document.querySelector(".expand-down-icon");
// let serviceExpand = document.querySelector(".service-expand");
// let serviceCollapse = document.querySelector(".collapse-up-icon");
// expandDown.addEventListener("click", function(){
// serviceExpand.classList.toggle("show");
   
// })

// serviceCollapse.addEventListener("click", function(){
//     serviceExpand.classList.toggle("show");
   
//  })

 const navMain = document.querySelector(".nav-main");
const navbarScrollActive = document.querySelector(".navbar_scroll_active");

window.addEventListener("scroll", function(){
    laptopScroll();
});

function laptopScroll(){
    let position_scroll_laptop = window.scrollY>150;
    navMain.classList.toggle("navbar_scroll_active", position_scroll_laptop);
}

