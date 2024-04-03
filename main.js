document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector('.burgerBtn');
  const content = document.querySelector('navWrap');
  const htmlElement = document.querySelector('html');
  burgerMenu.addEventListener('click' , () => htmlElement.classList.toggle('open'));
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
               ' <img class="line" src="./images/Line3.svg" alt="Стрілка" /> ' +
               '<span class="' + totalClass + '"></span>';
    },},
  
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});


const menuBtn = document.querySelector('.active-btn');
menuBtn.addEventListener('click', () => document.body.classList.toggle('active'));

const inputs = document.querySelectorAll('.form-group input');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    input.parentElement.classList.toggle('filled', input.value.trim() !== '');
  });
});
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach((formGroup) => {
  const input = formGroup.querySelector('input');
  input.addEventListener('input', () => {
    formGroup.classList.toggle('filled', input.value.trim() !== '');
   
  });
});

const submitBtnWrapper = document.getElementById('submitBtnWrapper');
const form = document.querySelector('.form'); 

submitBtnWrapper.addEventListener('click', () => {
  form.submit();
});

const doneIcon = document.getElementById('done-icon');
const messageInput = document.getElementById('message');

messageInput.addEventListener('focus', () => {
  doneIcon.style.display = 'none'; 
});

messageInput.addEventListener('blur', () => {
  if (!messageInput.value.trim()) {
    doneIcon.style.display = 'block'; 
  }
});
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
});