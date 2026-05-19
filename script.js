// ======================
// SWIPER
// ======================

const carSwiper1 = new Swiper(".carSwiper1", {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".carSwiper1 .swiper-pagination",
    clickable: true,
  },
});

const carSwiper2 = new Swiper(".carSwiper2", {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".carSwiper2 .swiper-pagination",
    clickable: true,
  },
});

// ======================
// FANCYBOX
// ======================

$("[data-fancybox]").fancybox({
  touch: false,
  autoFocus: false,
  animationEffect: "zoom",
  transitionEffect: "slide",
});

// ======================
// TIMER
// ======================

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// дата окончания (8 дней)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 9);

function updateTimer() {

  const now = new Date().getTime();

  const distance = endDate - now;

  if (distance < 0) {

    clearInterval(timerInterval);

    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";

    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  daysEl.innerHTML = String(days).padStart(2, "0");
  hoursEl.innerHTML = String(hours).padStart(2, "0");
  minutesEl.innerHTML = String(minutes).padStart(2, "0");
  secondsEl.innerHTML = String(seconds).padStart(2, "0");
}

updateTimer();

const timerInterval = setInterval(updateTimer, 1000);

// ======================
// PHONE MASK
// ======================

const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {

  input.addEventListener("input", phoneMask);
  input.addEventListener("focus", phoneMask);

});

function phoneMask(event) {

  let input = event.target;

  let value = input.value.replace(/\D/g, "");

  if (!value.startsWith("7")) {
    value = "7" + value;
  }

  let result = "+7";

  if (value.length > 1) {
    result += " (" + value.substring(1, 4);
  }

  if (value.length >= 5) {
    result += ") " + value.substring(4, 7);
  }

  if (value.length >= 8) {
    result += "-" + value.substring(7, 9);
  }

  if (value.length >= 10) {
    result += "-" + value.substring(9, 11);
  }

  input.value = result;
}

// ======================
// FORM SUBMIT
// ======================

const forms = document.querySelectorAll(".popup-form");

forms.forEach(form => {

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const input = form.querySelector("input");

    if (input.value.length < 18) {

      alert("Введите корректный номер");

      return;
    }

    const button = form.querySelector("button");

    button.disabled = true;

    button.innerHTML = "Отправка...";

    // имитация отправки
    setTimeout(() => {

      alert("Заявка успешно отправлена!");

      form.reset();

      button.disabled = false;

      button.innerHTML = "Отправить";

      $.fancybox.close();

    }, 1200);

  });

});

// ======================
// SMOOTH SCROLL
// ======================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

  link.addEventListener("click", function(e) {

    const href = this.getAttribute("href");

    if (href.length > 1) {

      e.preventDefault();

      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// ======================
// HEADER SCROLL EFFECT
// ======================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.classList.add("header-fixed");

  } else {

    header.classList.remove("header-fixed");

  }

});

// ======================
// BUTTON HOVER EFFECT
// ======================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-3px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0px)";

  });

});