/* write functions that define the action for each event */
function validate() {
	var email = document.getElementById("email").value;
	var psw1 = document.getElementById("psw").value;
	var psw2 = document.getElementById("psw-repeat").value;

	var errMsg = "";								/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	/* Rule 1, check if all required inputs have value */
	 if (email == "") {
	errMsg += "User ID cannot be empty.\n";
	}
	if (psw1 == "") {
	errMsg += "Password cannot be empty.\n";
	}
	if (psw2 == "") {
	errMsg += "Retype password cannot be empty.\n";
	}
	}
	/* Rule 2, check if the user ID contains an @ symbol  */
	if (email.indexOf('@') == 0 ) {
	errMsg += "User ID cannot start with an @ symbol.\n";
	}
	if (email.indexOf('@') < 0 ) {
	errMsg += "User ID must contain an @ symbol.\n";
	}

	/* Rule 3, check if password and retype password are the same */
	if (psw1 != psw2) {
		errMsg += "Passwords do not match.\n";
	}

	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
  var registration = 	document.getElementById("registration");

	/* assigns functions to corresponding events */
  registration.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;