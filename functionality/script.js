const form = document.getElementById("form");  
const firstname = document.getElementById("firstname"); 
const lastname = document.getElementById("lastname");  
const email = document.getElementById("email");  
const password = document.getElementById("password");
let emailError = document.getElementById("email").placeholder;



function showError(input, message) {  
    const formControl = input.parentElement;  
    formControl.className = "input error";  
    const small = formControl.querySelector("small");  
    small.innerText = message;  
   }  

   function showSuccess(input) {  
    const formControl = input.parentElement;  
    formControl.classList.add("success");  
   }  

   function checkRequired(inputArr) {  
    inputArr.forEach(function (input) {  
     if (input.value.trim() === "") {  
      showError(input, `${getFieldName(input)} cannot be empty`);  
     } else {  
      showSuccess(input);  
     }  
    });  
   }  

   function getFieldName(input) {  
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
   }  
 
   // Check E-mail Is Valid  
   function checkEmail(input) {  
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
    if (re.test(input.value.trim())) {  
     showSuccess(input);  
    } else {  
     showError(input, "Looks like this is not an email");  
    }  
   }  
 
   form.addEventListener("submit", (e) => {  
    e.preventDefault();  
    checkRequired([firstname, lastname, email, password]);   
    checkEmail(email);   
   });