const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const telephone = document.querySelector("#telephone");
const emailId = document.querySelector("#email");
const message = document.querySelector("#message");
const formData = document.querySelector("#form");
const modal = document.querySelector("#myModal");
const modalClose = document.querySelector(".modal-closebtn");
let body = document.getElementsByTagName("BODY")[0];

//setting boolean to false for invalid input
let isFormValid = false;

//storing all the input elements in an array
let inputs = [firstName, lastName, telephone, emailId, message]

//validating msg input
const isValidMsg = (msg) => {
    if(msg.length > 20){
        return true;
    }
}

//validating user name
const isValidName = (name) => {
    const nameRegex = /^\w{3,20}[\_\-\.\d+]*$/;
    return nameRegex.test(name);
}

//validating email address
const isValidEmail = (email) => {
    const emailRegex = /^\w+([\._]?)\w+@\w+([\.-]\w+)*\.\w{2,5}.[\w]{0,3}$/;
    return emailRegex.test(email);
}

//validating phone number
const isPhoneValid = (phone) => {
    const phoneRegex = /^((^\+33\s?)?((01|02|03|04|05|06|07|08|09)))?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;
    return phoneRegex.test(phone);
}

//reset input fields
const resetInputField = (inputField) => {
    inputField.nextElementSibling.classList.add("hidden")
}

//throwing error message
const setErrorMessage = (inputField) => {
    inputField.nextElementSibling.classList.remove("hidden")
}

//validating user input
const validateInputs = () => {
    inputs.forEach(resetInputField);
    isFormValid = true;

    if(!isValidName(firstName.value)){
        setErrorMessage(firstName);
        isFormValid = false;
    }

    if(!isValidName(lastName.value)){
        setErrorMessage(lastName);
        isFormValid = false;
    }

    if(!isPhoneValid(telephone.value)){
        setErrorMessage(telephone);
        isFormValid = false;
    }

    if(!isValidEmail(emailId.value)){
        setErrorMessage(emailId);
        isFormValid = false;
    }

    if(!isValidMsg(message.value)){
        setErrorMessage(message);
        isFormValid = false;
    }

}
    


let user = {};

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
    // checkInputs();
    
    if(isFormValid){
        user = {
            "FName": firstName.value,
            "LName": lastName.value,
            "Telephone": telephone.value,
            "EmailId": emailId.value,
            "Message": message.value
        }
        console.log(user);

        modalHandler(); // it will trigger the modal if all the inputs are valid
    }
})

//looping through each input field to call validation function
inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateInputs(input);
    })
})

//to open the pop up window
function modalHandler(){
    modal.style.display = "block";
    body.classList.add("background_clr");
    formData.reset();
}

//closing the popup window
modalClose.onclick = () => {
    modal.style.display = "none";
    body.classList.remove("background_clr");
}