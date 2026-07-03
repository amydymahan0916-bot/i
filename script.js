/* ==========================================
            ILIA FOREX
            script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
            FAQ
    ========================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

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
        threshold: 0.15
    });

    document.querySelectorAll(
        ".hero,.about,.faq,.stat,.chip,.about-card,.faq-item"
    ).forEach(el => {

        el.classList.add("hidden");
        observer.observe(el);

    });

    /* ==========================
        افکت سه بعدی عکس
    ========================== */

    const profile = document.querySelector(".profile-ring");

    if (profile) {

        document.addEventListener("mousemove", (e) => {

            const x = (window.innerWidth / 2 - e.clientX) / 45;
            const y = (window.innerHeight / 2 - e.clientY) / 45;

            profile.style.transform =
                `rotateY(${x}deg) rotateX(${-y}deg)`;

        });

        document.addEventListener("mouseleave", () => {

            profile.style.transform = "rotateY(0deg) rotateX(0deg)";

        });

    }

});

/* ==========================
    کپی اینستاگرام
========================== */

function copyInstagram() {

    navigator.clipboard.writeText("@iliafx_vip");

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.innerHTML = "✅ آیدی اینستاگرام کپی شد";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 50);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2200);

}
