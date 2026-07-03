/*==========================
      سوالات متداول
==========================*/

document.querySelectorAll(".faq-item").forEach(item=>{

const btn=item.querySelector(".question");

btn.addEventListener("click",()=>{

document.querySelectorAll(".faq-item").forEach(box=>{

if(box!==item){

box.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/*==========================
      کپی اینستاگرام
==========================*/

function copyInstagram(){

const username="@ilia.forex";

navigator.clipboard.writeText(username);

const insta=document.querySelector(".instagram span");

const old=insta.innerHTML;

insta.innerHTML="کپی شد ✓";

setTimeout(()=>{

insta.innerHTML=old;

},2000);

}

/*==========================
      دکمه اینستاگرام
==========================*/

const instaBtn=document.querySelector(".instagram");

if(instaBtn){

instaBtn.addEventListener("click",(e)=>{

e.preventDefault();

copyInstagram();

});

}

/*==========================
      افکت سه بعدی کارت ها
==========================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;

const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=

`perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(700px) rotateX(0) rotateY(0)";

});

});

/*==========================
      افکت نور روی موس
==========================*/

const glass=document.querySelector(".glass");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth*100;

const y=e.clientY/window.innerHeight*100;

glass.style.background=

`radial-gradient(circle at ${x}% ${y}%,
rgba(255,255,255,.10),
rgba(255,255,255,.04) 45%,
rgba(255,255,255,.03) 100%)`;

});

/*==========================
      انیمیشن ورود
==========================*/

window.addEventListener("load",()=>{

document.querySelectorAll(".left,.right,.card,.faq-item").forEach((el,i)=>{

el.style.opacity="0";

el.style.transform="translateY(30px)";

setTimeout(()=>{

el.style.transition=".8s";

el.style.opacity="1";

el.style.transform="translateY(0)";

},i*120);

});

});

/*==========================
      دکمه ها
==========================*/

document.querySelectorAll(".btn,.social").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.04)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});
