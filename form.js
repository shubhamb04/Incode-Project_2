const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const telephone = document.querySelector("#telephone");
const emailId = document.querySelector("#email");
const message = document.querySelector("#message");
const formData = document.querySelector("#form");
const modal = document.querySelector("#myModal");
const modalClose = document.querySelector(".modal-closebtn");
var body = document.getElementsByTagName("BODY")[0];

let user = {};

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    user = {
        "FName": firstName.value,
        "LName": lastName.value,
        "Telephone": telephone.value,
        "EmailId": emailId.value,
        "Message": message.value
    }
    console.log(user);

    modalHandler();
    
})


function modalHandler(){
    modal.style.display = "block";
    body.classList.add("background_clr");
    formData.reset();
}

modalClose.onclick = () => {
    modal.style.display = "none";
    body.classList.remove("background_clr");
}