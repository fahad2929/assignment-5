
    //............card 1 .............
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

   const addMoney = getInputFiledValueById('input-add-money');
   const balance = getTextFieldValueById('account-balance');
   const balance2 = getTextValueById('main-balance');
   const newBalance = balance + addMoney ;
   const bala = balance2 - addMoney;

   if(isNaN (addMoney) > 0){
    alert('Donation Added Failed !')
    return;
}

   if(  addMoney  > 0){
    alert(' Donation  Added')
       
    // Added history

    const h = document.createElement('h');
    h.classList.add('b');
    h.innerHTML = `<div class="bg-red-300 text-center m-5">
    <h5 class="text-xl font-bold"> Added Donation </h5>
    <p class="text-bold"> ${addMoney} Tk. Donate for Flood at Noakhali,Bangladesh  </p>
    </div>
    `
    document.getElementById('history').appendChild(h);

   }
   else{
    alert('Donation Added Failed !');
   }
   document.getElementById('main-balance').innerText = bala ;
   document.getElementById('account-balance').innerText = newBalance;
});

        //  ...........card 2 .............

        document.getElementById('btn-add-money2')
        .addEventListener('click', function(event) {
            event.preventDefault();
        
            const addMoney1 = getInputValueById('input-add-money2');
            const balance1 = getTextValueById('account-balance2');
            const balance2 = getTextValueById('main-balance');
            const newBalance2 = addMoney1 + balance1;
            const bala2 = balance2 - addMoney1;
        
            if(isNaN (addMoney1) > 0){
                alert('Donation Added Failed !')
                return;
            }


            if (addMoney1 > 0) {
                alert('Donation Added');
                // Added History
                const h = document.createElement('div');
                h.classList.add('b');
                h.innerHTML = `
                <div class="bg-lime-200 text-center m-5">
                    <h5 class="text-xl font-bold"> Added Donation </h5>
                    <p class="text-bold"> ${addMoney1} Tk. Donate for Flood Relief in Feni, Bangladesh </p>
                </div>
                `;
                document.getElementById('history').appendChild(h); 
            } else {
                alert('Donation Added Failed !');
            }
        
            document.getElementById('main-balance').innerText = bala2;
            document.getElementById('account-balance2').innerText = newBalance2;
        });
    
      // ..........card 3 ................
     document.getElementById('btn-add-money3')
     .addEventListener('click',function(event){
        event.preventDefault();
         
        const addMoney2 = getInput1ValueById('input-add-money3');
        const balance2 = getText1ValueById('account-balance3');
        const balance3 = getText1ValueById('main-balance');
        const newBalance3 =  addMoney2 + balance2 ;
        const bala3 = balance3 - addMoney2;


        if(isNaN (addMoney2) > 0){
            alert('Donation Added Failed !')
            return;
        }

        if( addMoney2 > 0){
            alert( 'Donation Added')
        //   Added History
            const r = document.createElement('c');
            r.classList.add('b');
            r.innerHTML = `<div class="bg-orange-200 text-center m-5">
            <h5 class="text-xl font-bold"> Added Donation </h5>
            <p class="text-bold"> ${addMoney2} Tk. Donate For Injured in The Quota Movement  </p>
            </div>
            `
            document.getElementById('history').appendChild(r);

           }
           else{
            alert('Donation Added Failed !');
           }
       document.getElementById('main-balance').innerText = bala3 ;
       document.getElementById('account-balance3').innerText = newBalance3;
    
    })

  
    // if(isNaN (addMoney2) > 0){
    //     alert('Donation Added Failed !')
    //     return;
    // }
    //     if( addMoney2 > 0 ){
    //         alert( 'Donation Added')
    //     //   Added History
    //         const r = document.createElement('c');
    //         r.classList.add('b');
    //         r.innerHTML = `<div class="bg-orange-200 text-center m-5">
    //         <h5 class="text-xl font-bold"> Added Donation </h5>
    //         <p class="text-bold"> ${addMoney2} Tk. Donate For Injured in The Quota Movement  </p>
    //         </div>
    //         `
    //         document.getElementById('history').appendChild(r);

    //        }
    //        else{
    //         alert('Donation Added Failed !');
    //        }
    //    document.getElementById('main-balance').innerText = bala3 ;
    //    document.getElementById('account-balance3').innerText = newBalance3;
    
    // })

// ......................................................

document.getElementById('show-donation')
.addEventListener('click',function(){

showDonationById('main-section');
})
document.getElementById('history1')
.addEventListener('click',function(){

showDonationById('history');
})