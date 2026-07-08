/* ==========================================
            ILIA FOREX | V8
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
            FAQ
    ========================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ==========================
        انیمیشن ورود
    ========================== */

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

        ".hero,.about,.faq,.chip,.stat,.about-card,.faq-item"

    ).forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

    /* ==========================
        افکت سه بعدی عکس
    ========================== */

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

    /* ==========================
        افکت دکمه‌ها
    ========================== */

    document.querySelectorAll(".chip").forEach(chip=>{

        chip.addEventListener("mouseenter",()=>{

            chip.style.transform="translateY(-8px) scale(1.03)";

        });

        chip.addEventListener("mouseleave",()=>{

            chip.style.transform="translateY(0) scale(1)";

        });

    });

    /* ==========================
        افکت آمار
    ========================== */

    document.querySelectorAll(".stat").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0)";

        });

    });

});
