/* ===========================
   آپلود مستقیم عکس
=========================== */

const upload = document.getElementById("imageUpload");
const preview = document.getElementById("avatarPreview");

if (upload && preview) {

    upload.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            preview.src = e.target.result;

        };

        reader.readAsDataURL(file);

    });

}

/* ===========================
   دکمه کپی اینستاگرام
=========================== */

function copyID() {

    const text = document.getElementById("instaText").innerText;

    navigator.clipboard.writeText(text);

    const btn = document.getElementById("copyBtn");

    const old = btn.innerHTML;

    btn.innerHTML = "✓ کپی شد";

    btn.style.background = "#18ff8b";

    setTimeout(() => {

        btn.innerHTML = old;

        btn.style.background = "";

    }, 2000);

}

/* ===========================
   FAQ
=========================== */

document.querySelectorAll(".faq-item").forEach(item => {

    item.querySelector(".question").addEventListener("click", () => {

        document.querySelectorAll(".faq-item").forEach(box => {

            if (box !== item) {

                box.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* ===========================
   افکت ورود
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll(".feature-card,.stat,.social-card,.faq-item").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = ".6s";

    observer.observe(el);

});
