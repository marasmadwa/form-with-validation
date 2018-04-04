document.addEventListener("DOMContentLoaded", function () {

    // console.log('DOMContentLoaded !')

    let labelError = document.querySelector('.error');
    let labelRequire = labelError.previousElementSibling;
    let labelEmailInput = labelRequire.previousElementSibling;
    let loginBtn = document.querySelector('button');
    let passwordLink = document.querySelector('a');
    console.log(passwordLink);

    loginBtn.addEventListener('click', function(){
        if (labelEmailInput.innerHTML.indexOf('@') < 0) {
            labelEmailInput.style.border = '1px solid red';
            labelError.style.color = 'red';
            labelError.innerHTML = 'Invalid email adress'
        }else {
            labelEmailInput.innerHTML = ''
        }
    });

    passwordLink.addEventListener("click", function(event){
        event.preventDefault()
    });

    popup = () => {
        let popup = document.querySelector('.popup');
        popup.style.visibility = 'visible';
    }


});