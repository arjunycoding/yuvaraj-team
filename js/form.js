 function validateForm() {
    return validateEmail();
}

function validateEmail() {
     var email=document.getElementById("email").value;
     var error = document.getElementById("email-error");
     if (email== ""){
     console.log("The world is black");
     error.className = "bad";
     error.innerHTML="Fill in your email please.";
     return false

     } else {
     console.log("The world is rainbows unicorns and lolipops!");
     error.className = "good";
     return true;
     }
}

