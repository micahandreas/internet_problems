function login() {
    username = document.getElementById('loginUsername');
    password = document.getElementById('loginPassword');
    if(username.value == "Micah Torres" && password.value == "lilactubagaming") {
        console.log('correct');
        window.location.href = "index.html";
    }else{
        errorParagraph = document.getElementById('error-login');
        errorParagraph.innerHTML = "Your username or password is incorrect. Try again.";
        console.log('errorLogin');
    }
}