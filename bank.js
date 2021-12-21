function addBalance(value) {
    let userGivenAmount = document.getElementById(value);
    const userGivenAmountValue = userGivenAmount.value;
    userGivenAmount.value = parseFloat(userGivenAmountValue);
    const amount = userGivenAmount.value;
    userGivenAmount.value = ' ';
    return amount;

};

function innerText(id) {
    let finalbalance = document.getElementById(id);
    const finalbalanceInnertext = finalbalance.innerText;
    const text = parseFloat(finalbalanceInnertext);
    return text;
}


function updateBalance(value, amount, isIncreasing) {

    let add = document.getElementById(value);
    const addInnnerText = add.innerText;
    console.log(addInnnerText)

    const total = parseFloat(amount) + parseFloat(addInnnerText);
    add.innerText = total;

    let finalbalance = document.getElementById('final-balance');
    const finalbalanceInnertext = finalbalance.innerText;
    if (isIncreasing == true) {

        finalbalance.innerText = parseFloat(finalbalanceInnertext) + parseFloat(amount);
    }
    else {
        finalbalance.innerText = parseFloat(finalbalanceInnertext) - parseFloat(amount);
    }
}



document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = addBalance('deposit-amount');
    if (amount > 0) {
        updateBalance('deposit-add', amount, true);
    }

});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = addBalance('withdraw-amount');
    const totalBalance = innerText('final-balance');
    if (amount > 0 && amount <= totalBalance) {
        updateBalance('withdraw-add', amount, false);
    }

});
document.getElementById('cards').addEventListener('click', function () {
    window.location.href = 'shopping-card.html';
})