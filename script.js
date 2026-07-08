/*=========================================
        ILIA FOREX REBORN
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*==========================
        FAQ
==========================*/

const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

const btn=item.querySelector(".faq-question");

btn.addEventListener("click",()=>{

faq.forEach(other=>{

if(other!==item){

other.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/*==========================
    Scroll Animation
==========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(

".hero,.about,.faq,.stat-card,.feature-card,.hero-btn"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*==========================
      Profile Effect
==========================*/

const profile=document.querySelector(".profile-ring");

if(profile){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

profile.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

profile.style.transform=

"rotateY(0deg) rotateX(0deg)";

});

}
        /*==========================
      Counter
==========================*/

const cards=document.querySelectorAll(".stat-card h2");

let started=false;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !started){

started=true;

animate(cards[0],500,"+");

animate(cards[1],98,"%");

animate(cards[2],5,"+");

cards[3].innerHTML="۱۰/۲۴";

}

});

});

const stats=document.querySelector(".stats");

if(stats){

counterObserver.observe(stats);

}

function animate(el,target,symbol){

let n=0;

const speed=Math.ceil(target/60);

const timer=setInterval(()=>{

n+=speed;

if(n>=target){

n=target;

clearInterval(timer);

}

el.innerHTML=n+symbol;

},25);

}

/*==========================
      Button Hover
==========================*/

document.querySelectorAll(".hero-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

});
