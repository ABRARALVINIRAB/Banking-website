document.getElementById('submit').addEventListener('click', function () {
    const userEmail = document.getElementById("email");
    const userEmailInnerValue = userEmail.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;

    if (userEmailInnerValue == 'alvi@gmail.com' && passwordValue == '123') {
        window.location.href = 'bank.html';

    }
    else {
        window.alert('wrong email or pasword');
    }


});