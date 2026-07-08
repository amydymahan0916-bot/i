/*==================================================
                ILIA FOREX V10
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
            FAQ
    ==============================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /*==============================
        Scroll Animation
    ==============================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold:0.15

    });

    document.querySelectorAll(

        ".hero,.about,.faq,.stat-card,.feature-card,.faq-item"

    ).forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

});
/*=========================================
        افکت سه‌بعدی عکس
=========================================*/

const profile = document.querySelector(".profile-ring");

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

/*=========================================
        شمارنده آمار
=========================================*/

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const target=counter.innerText;

const number=parseInt(target.replace(/\D/g,""));

const suffix=target.replace(/[0-9]/g,"");

let count=0;

const speed=Math.max(10,Math.floor(number/80));

const timer=setInterval(()=>{

count+=speed;

if(count>=number){

count=number;

clearInterval(timer);

}

counter.innerText=count+suffix;

},20);

});
/*=========================================
        Toast
=========================================*/

function showToast(text){

const old=document.querySelector(".toast");

if(old) old.remove();

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=text;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},50);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},300);

},2500);

}

/*=========================================
    کپی اینستاگرام
=========================================*/

function copyInstagram(){

navigator.clipboard.writeText("@iliafx_vip");

showToast("✅ آیدی اینستاگرام کپی شد");

}

/*=========================================
    افکت کلیک دکمه‌ها
=========================================*/

document.querySelectorAll(".hero-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="";

},150);

});

});

/*=========================================
    سال خودکار فوتر
=========================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
/*=========================================
        Hover Animation
=========================================*/

document.querySelectorAll(".hero-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

btn.style.transform="translateY(-8px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

/*=========================================
        Smooth Scroll
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*=========================================
        Disable Drag Image
=========================================*/

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

/*=========================================
        Disable Right Click Image
=========================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

});

/*=========================================
            Console Message
=========================================*/

console.log("%cILIA FOREX","color:#D4AF37;font-size:30px;font-weight:bold;");

console.log("%cOfficial Website","color:#ffffff;font-size:16px;");
