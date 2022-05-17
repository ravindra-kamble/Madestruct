const toggleBtn = document.querySelector('.toggle-btn');
const panelLayer1 = document.querySelector('.panel-svg');
const panelLayer2 = document.querySelector('.panel-svg1');
const panelCloseBtn = document.querySelector('.close-btn');
const mbNav = document.querySelector('.mb-nav');
const mainBody = document.querySelector('body');
let logoSection = document.querySelector('.picture-logo-mobile');

// mb nav collapse logic
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



