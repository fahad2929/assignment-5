document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

  const addMoney = getInputFiledValueById('input-add-money')


//    const balance = document.getElementById('account-balance').innerText;
//    const bal = parseFloat(balance);

//    const newBalance = bal + addMoney
//    document.getElementById('account-balance').innerText = newBalance;

 
const balance = getTextFieldValueById('account-balance');
const newBalance = balance + addMoney ;

document.getElementById('account-balance').innerText = newBalance;
});