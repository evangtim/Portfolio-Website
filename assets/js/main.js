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

/*FORM SCRIPT*/
// Run function when DOM Content has loaded
document.addEventListener('DOMContentLoaded', init);

// Function to run when DOM Content has loaded
function init(event) {

	// Get registration form and keep in global scope
	contactForm = document.forms['contactForm'];

	// Listen for form submit
	contactForm['submit'].onclick = validateForm; 
}

// Function to validate form elements
function validateForm(event) {

	// Array to contain all error messages
	var errorMessages = Array();

	// If Name is empty
	if(!contactForm['name'].value) {
		errorMessages.push('* Please enter Full Name');
	}

	// If Telephone is empty
	if(!contactForm['tel'].value) {
		errorMessages.push('* Please enter telephone number');
	}

	// If email is empty
	if(!contactForm['email'].value) {
		errorMessages.push('* Please enter Email');
    }
    
    // If message is empty
	if(!contactForm['message'].value) {
		errorMessages.push('* Please enter your message');
	}

	//--Replaced--//

	//--Replace--//

	
  // Show error messages
	displayErrors(errorMessages);
  
	// If there are errors
	if(errorMessages.length) {
		// Stop the form from submitting
		return false;
	} 
  
}

//form button//

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {action: "https://formspree.io/f/xvovvzok"})

function Redirect() {
  window.location = "thanks.html";
}

function displayErrors(errors) {
	var errorBox = document.getElementById('errorMessages');
  
  // If there aren't any errors
	if(!errors.length) {
		errorBox.innerHTML = '';
    return false;    
	}

	// Get reference to error box
	var errorBox = document.getElementById('errorMessages');

	// Prepare a container to hold the completed error message string
	var messageString = '<ul>';

	// Loop through each error to display
	for(var i=0; i<errors.length; i++) {
		messageString += '<li>' + errors[i] + '</li>';
	}

	messageString += '</ul>';

	errorBox.innerHTML = messageString;
}