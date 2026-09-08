// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });

}


// ===============================
// CLOSE MOBILE MENU
// ===============================

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

    });

});


// ===============================
// COURSE BUTTONS
// ===============================

const courseSelect =
    document.getElementById("courseSelect");

const contact =
    document.getElementById("contact");

document.querySelectorAll(".course-button")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            const course =
                button.dataset.course;

            if (courseSelect) {
                courseSelect.value = course;
            }

            if (contact) {

                contact.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


// ===============================
// REGISTER FORM
// ===============================

const registerForm =
    document.getElementById("registerForm");

const message =
    document.getElementById("message");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const course =
            courseSelect.value;


        if (!name || !phone || !course) {

            message.textContent =
                "لطفاً اطلاعات را کامل کنید.";

            return;

        }


        message.textContent =
            `درخواست شما برای «${course}» با موفقیت ثبت شد.`;

        registerForm.reset();

    });

}


// ===============================
// CURRENT YEAR
// ===============================

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}
