// دکمه کپی اینستاگرام
function copyID() {
    const input = document.getElementById("insta");

    navigator.clipboard.writeText(input.value).then(() => {

        const btn = document.querySelector(".copy-box button");

        btn.innerText = "کپی شد ✓";

        setTimeout(() => {
            btn.innerText = "کپی";
        }, 2000);

    }).catch(() => {
        alert("کپی انجام نشد.");
    });
}


// سوالات متداول
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        item.classList.toggle("active");

    });

});
