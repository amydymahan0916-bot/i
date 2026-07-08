/*==================================
        ILIA FOREX V9
==================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*=========================
        FAQ
=========================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/*=========================
    Scroll Animation
=========================*/

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

".hero,.about,.faq,.chip,.stat,.about-card,.faq-item"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*=========================
    3D Profile Effect
=========================*/

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
            /*=========================
      Counter Animation
=========================*/

const counters=document.querySelectorAll(".stat h2");

const runCounter=(counter,target,suffix="")=>{

let count=0;

const step=Math.ceil(target/60);

const timer=setInterval(()=>{

count+=step;

if(count>=target){

count=target;

clearInterval(timer);

}

counter.innerHTML=count+suffix;

},25);

};

const statObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const cards=document.querySelectorAll(".stat");

runCounter(cards[0].querySelector("h2"),500,"+");

runCounter(cards[1].querySelector("h2"),98,"%");

runCounter(cards[2].querySelector("h2"),5,"+");

cards[3].querySelector("h2").innerHTML="۹ تا ۲۴";

statObserver.disconnect();

}

});

});

const stats=document.querySelector(".stats");

if(stats){

statObserver.observe(stats);

}

/*=========================
      Hover Effects
=========================*/

document.querySelectorAll(".chip").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

});
