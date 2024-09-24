document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

   const addMoney = getInputFiledValueById('input-add-money');
   const balance = getTextFieldValueById('account-balance');
   const balance2 = getTextFieldValueById('main-balance');
   const newBalance = balance + addMoney ;
   const bala = balance2 - newBalance;

   document.getElementById('main-balance').innerText = bala ;
   document.getElementById('account-balance').innerText = newBalance;

});

document.getElementById('btn-add-money2').addEventListener('click',function(event){
    event.preventDefault();
     
    const addMoney = getInputValueById('input-add-money2');
    const balance = getTextValueById('account-balance2');
    const balance2 = getTextValueById('main-balance');
    const newBalance = balance + addMoney ;
    const ori = balance2 - newBalance;

   document.getElementById('main-balance').innerText = ori ;
   document.getElementById('account-balance2').innerText = newBalance;



})