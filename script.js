document.addEventListener("DOMContentLoaded", function () {

const form = document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit", function(e){
e.preventDefault();

let name = form.querySelector('input[type="text"]').value.trim();
let email = form.querySelector('input[type="email"]').value.trim();
let message = form.querySelector("textarea").value.trim();

if(name === "" || email === "" || message === ""){
alert("Please fill all fields");
return;
}

if(!email.includes("@") || !email.includes(".")){
alert("Please enter valid email");
return;
}

alert("Message sent successfully!");

form.reset();

});

}

});
