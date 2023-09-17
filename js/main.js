function validate()
{
    var name = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var conPassword = document.getElementById("conPassword").value;
    var error = document.getElementById("error");

    error.style.transition = "all 1.5s ease"
    error.style.backgroundColor = "#fea1a9";
    error.style.color = "#8d0404";
    
    
    if (name == "" && email == "" && password == "" && conPassword == "" ) {
        error.innerHTML = "Please enter data";
        return false;
        
    }else if (name.length <=5||name.length>15)
    {
        error.innerHTML = "pleas enter name is 5-15 charcter";
        return false;
    }
    else if (email.indexOf("@") == -1 )
    {
        error.innerHTML = "pleas enter @ in your E-mail";
        return false;
    }

    else if (password.length <=8)
    {
        error.innerHTML = "pleas enter password is more than 8 charcter";
        return false;
    }
    else if (password!= conPassword)
    {
        error.innerHTML = "pleas enter confirm password";
        return false;
    }
} 

