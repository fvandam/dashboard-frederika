const emailField = document.querySelector('.email-input');
const passwordField = document.querySelector('.password-input');
const saveButton = document.querySelector('.save-button');


saveButton.addEventListener('click', function(){
    console.log(emailField.value, passwordField.value);

    doLogin(emailField.value, passwordField.value)
})

function doLogin(email, password){
    fetch(`https://mbo-sd.nl/apiv2/login/${email}/` + password)
    .then(myData => myData.json())
    .then(textData => loginCheck(textData));
}

function loginCheck(data) {
    if (data['login-successfull']) {
        console.log(data);
        console.log(true);

        localStorage.setItem("personObject", JSON.stringify(data));   
        window.location.href="Home-Page.html";
    } else {
       alert('foute inlog');
    }
}
// doLogin('janjulius', 'JJ2023!')
