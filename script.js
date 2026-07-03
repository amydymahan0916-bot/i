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
        انیمیشن هنگام اسکرول
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
        افکت سه‌بعدی عکس
    ========================== */

    const profile = document.querySelector(".profile-ring");

    if (profile) {

        document.addEventListener("mousemove", (e) => {

            const x = (window.innerWidth / 2 - e.clientX) / 45;

            const y = (window.innerHeight / 2 - e.clientY) / 45;

            profile.style.transform =
                `rotateY(${x}deg) rotateX(${-y}deg)`;

        });
