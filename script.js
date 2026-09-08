// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

  navMenu.classList.toggle("open");

});


// بستن منو بعد از انتخاب لینک

document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("open");

  });

});


// ================================
// COURSE BUTTONS
// ================================

const courseSelect =
  document.getElementById("courseSelect");

document.querySelectorAll(".course-button")
  .forEach(button => {

    button.addEventListener("click", () => {

      const selectedCourse =
        button.dataset.course;

      courseSelect.value = selectedCourse;

      document
        .getElementById("contact")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

  });


// ================================
// REGISTER FORM
// ================================

const form =
  document.getElementById("registerForm");

const message =
  document.getElementById("message");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("name")
      .value.trim();

  const phone =
    document.getElementById("phone")
      .value.trim();

  const course =
    courseSelect.value;


  if (!name || !phone || !course) {

    message.textContent =
      "لطفاً تمام اطلاعات را وارد کنید.";

    return;

  }


  message.textContent =
    `درخواست شما برای دوره ${course} ثبت شد.`;

  form.reset();

});


// ================================
// CURRENT YEAR
// ================================

document.getElementById("year")
  .textContent =
  new Date().getFullYear();
