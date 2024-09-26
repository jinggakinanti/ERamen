function submit(){
    regisForm = document.getElementById("regisForm")
    username = document.getElementById("username")
    email = document.getElementById("email")
    password = document.getElementById ("password")
    confirm = document.getElementById ("confirm")
    age = document.getElementById ("age")
    male = document.getElementById ("male")
    female = document.getElementById ("female")
    agree = document.getElementById ("agree")
    error = document.getElementById ("error")

    if(username.value.length < 5){
        error.innerHTML = "Username must be at least 5 characters"
        alert ("Username must be at least 5 characters")
    }else if(!email.value.endsWith("@gmail.com")){
        error.innerHTML = "Email must end with '@gmail.com'"
        alert ("Email must end with '@gmail.com'")
    }else if(!isAlphanumeric(password.value)){
        error.innerHTML = "Password must include number and letters"
        alert ("Password must include number and letters")
    }else if(confirm.value != password.value){
        error.innerHTML = "Password doesn't match"
        alert ("Password doesn't match")
    }else if(age.value < 18){
        error.innerHTML = "You must be at least 18 to register"
        alert ("You must be at least 18 to register")
    }else if(!(male.checked || female.checked)){
        error.innerHTML = "Gender must be picked"
        alert ("Gender must be picked")
    }else if(!agree.checked){
        error.innerHTML = "You must agree to the terms & conditions"
        alert ("You must agree to the terms & conditions")
    } else{
        error.innerHTML = ""
        alert("Successfull!")
        regisForm.submit() //kirim data
    }
}