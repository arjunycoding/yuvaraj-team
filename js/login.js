function validateForm() {
    if (validatUname()){
        return true;
    } else {
        return false;
    }
}
function validatEmail() {

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