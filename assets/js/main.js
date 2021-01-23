/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*form submit*/
// We access to the inputs by their id's
let name = document.getElementById("fname");
let tel = document.getElementById("tel");
let email = document.getElementById("email");
let message = document.getElementById("message");

// Error messages
let errorElementname = document.getElementById("fname_error");
let errorElementtel = document.getElementById("tel_error");
let errorElementemail = document.getElementById("email_error");
let errorElementmessage = document.getElementById("message_error");

// Form
let contactForm = document.getElementById("contactform");

// Event listener
contactForm.addEventListener("submit", function (e) {
  let messageName = [];
  let messageTel = [];
  let messageEmail = [];
  let messageMessage = [];
  
    if (fname.value === "" ||fname.value === null) {
    messageName.push("* This field is required");
  }

  if (tel.value === "" || tel.value === null) {
    messageTel.push("* This field is required");
  }

  if (email.value === "" || email.value === null) {
      messageEmail.push("* This field is require");
  }

  if (message.value === "" || message.value === null) {
      messageMessage.push("* This field is required")
  }

  // Statement to shows the errors
  if (messageName.length || messageTel.length || messageEmail.length || messageMessage.length > 0) {
    e.preventDefault();
    errorElementname.innerText = messageName;
    errorElementtel.innerText = messageTel;
    errorElementemail.innerText = messageEmail;
    errorElementmessage.innerText = messageMessage;
  }
  
   // if the values length is filled and it's greater than 2 then redirect to this page
    if (
    (fname.value.length > 2,
    tel.value.length > 2,
    email.value.length> 2,
    message.value.length> 2)
  ) {
    e.preventDefault();
    window.location.assign("thanks.html");
  }

});










