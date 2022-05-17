const toggleBtn = document.querySelector('.toggle-btn');
const panelLayer1 = document.querySelector('.panel-svg');
const panelLayer2 = document.querySelector('.panel-svg1');
const panelCloseBtn = document.querySelector('.close-btn');
const mbNav = document.querySelector('.mb-nav');
const mainBody = document.querySelector('body');
let logoSection = document.querySelector('.picture-logo-mobile');

toggleBtn.addEventListener('click', function () {
  mbNav.classList.remove('animate__animated');
  mbNav.classList.remove('animate__fadeOut');
  mbNav.classList.add('show');
  document.body.style.overflowY = 'hidden';
});

panelCloseBtn.addEventListener('click', function () {
  mbNav.classList.add('animate__animated', 'animate__bounceOutLeft');
  mbNav.classList.remove('show');
  document.body.style.overflowY = 'scroll';
});

//scroll nav logo effect
window.addEventListener('scroll', function () {
  mbScrollActive();
  mbScrollActiveMid();
});

function mbScrollActive() {
  let position_scroll = window.scrollY > 200;
  logoSection.classList.toggle('scrolling_active', position_scroll);
  document
    .querySelector('.picture-logo-img')
    .classList.toggle('scrolling_active_logo', position_scroll);
  toggleBtn.classList.toggle('toggle-btn-scroll', position_scroll);
}

function mbScrollActiveMid() {
  let position_scroll_mid = window.scrollY > 500;
  logoSection.classList.toggle('scrolling_active_color', position_scroll_mid);
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

const navMain = document.querySelector('.nav-main');
const navbarScrollActive = document.querySelector('.navbar_scroll_active');

window.addEventListener('scroll', function () {
  laptopScroll();
});

function laptopScroll() {
  let position_scroll_laptop = window.scrollY > 150;
  navMain.classList.toggle('navbar_scroll_active', position_scroll_laptop);
}


// Quick contact
const qArrow = document.querySelector(".quick-arrow");
const qform = document.querySelector(".quick-contact-form");
const qWht = document.querySelector(".whatsapp");
const qfb = document.querySelector(".facebook");
const NavArrow = document.querySelector(".fa-long-arrow-alt-left");
let flag = true

qArrow.addEventListener("click", function(){
  if(flag)
  {
    tHide();
    setTimeout(QuickToggle,200);
  flag=false;
  }
  else{
    setTimeout(tShow, 200);
    QuickToggle();
    flag=true; 
  }
});

function QuickToggle(){
   qform.classList.toggle("hide");
   qWht.classList.toggle("hide");
   qfb.classList.toggle("hide");
}

function tHide(){
  qform.style.transform = "translateX(-100%)";
  qWht.style.transform = "translateX(-100%)";
  qWht.style.transform = "rotate(90deg)";
  qfb.style.transform = "translateX(-100%)";
  qfb.style.transform = "rotate(90deg)";
  NavArrow.style.transform = "rotate(180deg)";
}

function tShow()
{
  qform.style.transform = "translateX(0%)";
  qform.style.transform = "rotate(180deg)";
  qWht.style.transform = "translateX(0%)";
  qfb.style.transform = "translateX(0%)";
  NavArrow.style.transform = "rotate(0deg)";
}

// arrow up logic

const arrowUp = document.querySelector(".arrow-up");

window.addEventListener('scroll', function () {
  scrollArrow();
});

function scrollArrow() {
  let position_scroll_laptop = window.scrollY > 500;
  arrowUp.classList.toggle('arrow-up-active', position_scroll_laptop);
}

// arrow logic ends here 




// all logic of caursel

// let slide = document.querySelectorAll('.slide');
// let slider = document.querySelectorAll('.slider');
// let slides = document.querySelector(".slides");


// let leftclick = document.querySelector('#leftarrow');
// let rightclick = document.querySelector('#rightarrow');

// leftclick.addEventListener('click', leftBtn);

// function leftBtn() {
//   let newSlide = document.createElement("li");
//   newSlide.classList.add("slide");
//   let counter = 0;
//   for (let i = 0; i <= slide.length; i++) {
//       let firstSlide = slides.getElementsByTagName("li")[0].innerHTML;
//       console.log(firstSlide);
     
//       newSlide.innerHTML = firstSlide;
      
      
//       if (i == slide.length) {
//         slides.getElementsByTagName("li")[`${i}`].innerHTML = firstSlide;
        
//       }
//       if(i<slide.length){
//         slides.getElementsByTagName("li")[`${i}`].style.transform=`translateX(-${101}%)`;
       
  
//         // slides.getElementsByTagName("li")[`${i}`].style.transition="all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)";
//         // document.querySelector(`.slide${i}`).style.transform="translateX(-200%)";
         
//         console.log(firstSlide);
//         console.log(newSlide);
//         slides.appendChild(newSlide);
//       }
//       counter+=50;
//   }
//   slides.getElementsByTagName("li")[0].remove();

// }















// function leftBtnClick() {
//   //retrived value of 1st element
//   let imgs = slide[0];
//   console.log(imgs);
//   console.log('clicked');
//   for (let i = 0; i < slide.length; i++) {
//     let oldSlide = slide[i + 1];
//     console.log(oldSlide);
//     var item = document.getElementById('slides').childNodes[i];
//     console.log(item);
//     if (i < slide.length - 1) {
//       //   slide[i].replaceChild(oldSlide, newSlide.childNodes[i]);
//       var item = document.getElementById('slides');
//       item.replaceChild(oldSlide, item);
//     } else {
//       console.log('next' + i);
//     }
//   }

//   //remove the 1st element from dom
// }
