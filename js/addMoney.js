
    //............card 1 .............
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

   const addMoney = getInputFiledValueById('input-add-money');
   const balance = getTextFieldValueById('account-balance');
   const balance2 = getTextValueById('main-balance');
   const newBalance = balance + addMoney ;
   const bala = balance2 - addMoney;

   if( addMoney> 0){
    alert('Your Donation is Added')
   }
   else{
    alert('Donation Added Failed');
   }
   document.getElementById('main-balance').innerText = bala ;
   document.getElementById('account-balance').innerText = newBalance;

});


        //  ...........card 2 .............
document.getElementById('btn-add-money2').addEventListener('click',function(event){
    event.preventDefault();
     
    const addMoney1 = getInputValueById('input-add-money2');
    const balance1 = getTextValueById('account-balance2');
    const balance2 = getTextValueById('main-balance');
    const newBalance2 =  addMoney1 + balance1 ;
    const bala2 = balance2 - addMoney1;


    if( addMoney1 > 0){
        alert('Your Donation is Added')
       }
       else{
        alert('Donation Added Failed');
       }


   document.getElementById('main-balance').innerText = bala2 ;
   document.getElementById('account-balance2').innerText = newBalance2;

})


      // ..........card 3 ................
     document.getElementById('btn-add-money3').addEventListener('click',function(){
        event.preventDefault();
         
        const addMoney2 = getInput1ValueById('input-add-money3');
        const balance2 = getText1ValueById('account-balance3');
        const balance3 = getText1ValueById('main-balance');
        const newBalance3 =  addMoney2 + balance2 ;
        const bala3 = balance3 - addMoney2;

        if( addMoney2 > 0){
            alert('Your Donation is Added')
           }
           else{
            alert('Donation Added Failed');
           }
    
       document.getElementById('main-balance').innerText = bala3 ;
       document.getElementById('account-balance3').innerText = newBalance3;
    
    })