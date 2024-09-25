    // common shared function here

        //..................card 1...................
   function getInputFiledValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
   }

   function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;}

    //..............card 2..................
   function getInputValueById(id){
    const inputValue2 = document.getElementById(id).value;
    const inputNumber2 = parseFloat(inputValue2);
    return inputNumber2;
   }

   function getTextValueById(id){
    const textValue2 = document.getElementById(id).innerText;
    const textNumber2 = parseFloat(textValue2);
    return textNumber2;}
    // ...........card 3 .............

    function getInput1ValueById(id){
        const inputValue3 = document.getElementById(id).value;
        const inputNumber3 = parseFloat(inputValue3);
        return inputNumber3;
       }
    
       function getText1ValueById(id){
        const textValue3 = document.getElementById(id).innerText;
        const textNumber3 = parseFloat(textValue3);
        return textNumber3;}
// ...........................................................


function showDonationById (id){

    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    // show the section with provided id
    document.getElementById(id).classList.remove('hidden');
}

    
