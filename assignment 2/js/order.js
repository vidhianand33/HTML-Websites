var addressRef = document.getElementById("address");
var cardRef = document.getElementById("card");
var cardumberRef = document.getElementById("cardNumber");
var copy = document.getElementById("same");
var copyParent = document.getElementById("sameParent");
var copyFromAddress = document.getElementById("copyFromAddress");
var copyhere = document.getElementById("copyhere");
call();

// disabling some inputs
function call() {
    addressRef.disabled = true;
    cardRef.disabled = true;
    cardumberRef.disabled = true;
    addressRef.readOnly = true;
    addressRef.style.display = "none";
    cardRef.style.display = "none";
    cardumberRef.style.display = "none"
    copyParent.style.display = "none"
}
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function show(state) {
    console.log(state);
    if (state == "delivery") {
        addressRef.style.display = "block";
        copyParent.style.display = "block"
        //addressRef.style.display="none";
    } else {
        addressRef.style.display = "none";
        copyParent.style.display = "none"
    }
}

function payment(state) {
    console.log("payment is by ", state);
    if (state == "online") {
        cardRef.style.display = "block";
        cardumberRef.style.display = "block";
    } else {
        cardRef.style.display = "none";
        cardumberRef.style.display = "none";
    }
}

function copyAddress() {
    if (copy.checked) {
        // var address = document.orderForm.address.value;
        // var billingAddress = document.orderForm.billingAddress.value;
        // console.log("address",address.value);
        // billingAddress.value = address.value;
        if(copyFromAddress.value=="") {
            printError("billingAddressErr", "Please enter your delivery address first");
            copy.checked = false
        } else {
            copyhere.value = copyFromAddress.value;
        }
    } else {

    }

}

// Defining a function to validate form 
function validateOrderForm() {
    // Retrieving the values of form elements
    var mode = document.orderForm.mode.value;
    var address = document.orderForm.address.value;
    var billingAddress = document.orderForm.billingAddress.value;
    var mobile = document.orderForm.mobile.value;
    var email = document.orderForm.email.value;
    var pay = document.orderForm.pay.value;
    var card = document.orderForm.card.value;
    var secret = document.orderForm.cardNumberRef.value;
    // Defining error variables with a default value
    var modeErr = addressErr = billingAddressErr = mobileErr = emailErr = payErr = cardErr = cardNumberErr = true;

    if (mode == "") {
        printError("modeErr", "Please select mode of Delivery");
    } else {
        printError("modeErr", "");
        modeErr = false;
    }

    if (mode == "pickup") {
        addressErr = false;
    } else {
        if (address == "") {
            printError("addressErr", "Please fill address");
        } else {
            printError("addressErr", "");
            addressRef = false;
        }
    }

    if (billingAddress == "") {
        printError("billingAddressErr", "Please fill billing address");
    } else {
        printError("billingAddressErr", "");
        billingAddressErr = false;
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (pay == "") {
        printError("payErr", "Please select pay of option either  ");
    } else {
        printError("payErr", "");
        payErr = false;
    }

    if (pay == "Pickup") {
        cardErr = false;
        cardNumberErr = false;
    } else {
        if (card == "") {
            printError("cardErr", "Please fill address");
        } else {
            printError("cardErr", "");
            payErr = false;
            addressErr = false;
            cardErr = false;
            cardumberRef = false;
        }
    }

    if (card == "Visa" || card == "MasterCard") {
        if (secret.length != 16) {
            printError("cardNumberErr", "Visa Card or MasterCard digit should be 16 ");
        } else {
            printError("cardNumberErr", "");
            cardNumberErr = false;
        }
    } else if (card == "American Express") {
        if (secret.length != 15) {
            printError("cardNumberErr", "American Express Card digit should be 15 ");
        } else {
            printError("cardNumberErr", "");
            cardNumberErr = false;
        }
    }
    if (pay == "Pickup") {
        cardErr = false;
        cardNumberErr = false;
    }
    if ((modeErr || addressErr || billingAddressErr || mobileErr || emailErr || payErr || cardErr || cardNumberErr) == true) {
        console.log(modeErr, addressErr, billingAddressErr, mobileErr, emailErr, payErr, cardErr, cardNumberErr);
        return false;
    } else {
        console.log("true");
        return true;
    }
};