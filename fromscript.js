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
	if(!contactForm['fName'].value) {
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

/*OLD FORM SCRIPT*/
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

// Form //
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


//Keep to return//
<script type = "text/javascript">
    
    function Redirect() {
        window.location = "thanks.html";
    }
    
</script>