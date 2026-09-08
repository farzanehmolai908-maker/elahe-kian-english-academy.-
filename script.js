// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // بستن منو بعد از کلیک روی لینک
  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}


// ==========================================
// COURSE SELECTION
// ==========================================

const courseSelect = document.getElementById("courseSelect");
const contactSection = document.getElementById("contact");

document.querySelectorAll(".course-button").forEach(button => {

  button.addEventListener("click", () => {

    const selectedCourse = button.dataset.course;

    if (courseSelect) {
      courseSelect.value = selectedCourse;
    }

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


// ==========================================
// REGISTER FORM
// ==========================================

const registerForm =
  document.getElementById("registerForm");

const message =
  document.getElementById("message");

if (registerForm) {

  registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const course =
      courseSelect.value;


    // بررسی اطلاعات
    if (!name || !phone || !course) {

      message.textContent =
        "لطفاً تمام اطلاعات را کامل کنید.";

      return;
    }


    // پیام موفقیت
    message.textContent =
      `درخواست ثبت‌نام شما برای دوره «${course}» با موفقیت ثبت شد.`;

    // پاک کردن فرم
    registerForm.reset();

  });

}


// ==========================================
// CURRENT YEAR
// ==========================================

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


// ==========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", function(event) {

  if (!navMenu || !menuBtn) {
    return;
  }

  const clickedInsideMenu =
    navMenu.contains(event.target);

  const clickedMenuButton =
    menuBtn.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {

    navMenu.classList.remove("open");

  }

});
