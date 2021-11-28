let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate(){

    if(email.value=="admin"||pwd.value=="12345"){
        alert("validation is proper");
        return true;
    }
    else{
        alert("Validation is not proper");
        return false;
    }

}