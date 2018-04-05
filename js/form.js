document.addEventListener("DOMContentLoaded", function () {

    // console.log('DOMContentLoaded !')

    let labelError = document.querySelector('.error');
    let labelRequire = labelError.previousElementSibling;
    let labelEmailInput = labelRequire.previousElementSibling;
    let loginBtn = document.querySelector('button');
    let passwordLink = document.querySelector('a');
    let form = document.querySelector('form');
    let resetBtn = document.querySelector('.resetBtn');
    let cancelBtn = document.querySelector('.cancelBtn');
    let popupInput = document.querySelector('#popupEmail');
    let popupError = document.querySelector('.popupError');
    console.log(popupInput);


    loginBtn.addEventListener('click', function () {
        if (labelEmailInput.innerHTML.indexOf('@') < 0) {
            labelEmailInput.style.border = '1px solid #cc0849';
            labelError.style.color = '#cc0849';
            labelError.innerHTML = 'Invalid email adress'
        } else {
            labelError.innerHTML = ''
        }
    });

    passwordLink.addEventListener("click", function (event) {
        event.preventDefault();
    });

    popup = () => {
        let popup = document.querySelector('.popup');
        popup.style.visibility = 'visible';
        form.style.visibility = 'hidden';
    };


    resetBtn.addEventListener('click', function () {
        if (popupInput.innerHTML.indexOf('@') < 0) {
            popupInput.style.border = '1px solid #cc0849';
            popupError.style.color = '#cc0849';
            popupError.innerHTML = 'Invalid email adress'
        } else {
            popupError.innerHTML = ''
        }
    });

    cancelBtn.addEventListener("click", function () {
        let popup = document.querySelector('.popup');
        popup.style.visibility = 'hidden';
        form.style.visibility = 'visible';
        popupInput.innerHTML = '';
    });
});