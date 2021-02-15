
function validateForm() {
    if (validatUname()){
        if(ValidateEmail()){
            return true;
        }
    } else {
        return false;
    }
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
function validatUname() {
    var uname = document.getElementById('uname').value.length;
    var unameError = document.getElementById('uname-error');
    if(uname >= 8){
        console.log('good');
        unameError.className = "good";
        return true;
    } else {
        console.log('bad');
        unameError.className = "bad";
        unameError.innerHTML = "Your username must be more than 8 characters long"
        return false;
    }
}

