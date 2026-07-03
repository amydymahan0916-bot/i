/*=========================
      کپی اینستاگرام
=========================*/

function copyInstagram(){

navigator.clipboard.writeText("@iliafx_vip");

const btn=document.querySelectorAll(".dark");

btn.forEach(item=>{

const old=item.innerHTML;

item.innerHTML="<i class='fa-solid fa-check'></i> کپی شد";

setTimeout(()=>{

item.innerHTML=old;

},2000);

});

}

/*=========================
      FAQ
=========================*/

document.querySelectorAll(".faq-box").forEach(box=>{

const btn=box.querySelector(".question");

btn.addEventListener("click",()=>{

document.querySelectorAll(".faq-box").forEach(item=>{

if(item!==box){

item.classList.remove("active");

}

});

box.classList.toggle("active");

});

});

/*=========================
      افکت ورود
=========================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll(".stat-card,.service-card,.instagram-card,.faq-box").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*=========================
      افکت نور روی موس
=========================*/

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth*100;

const y=e.clientY/window.innerHeight*100;

document.documentElement.style.setProperty("--x",x+"%");

document.documentElement.style.setProperty("--y",y+"%");

});
