    // common shared function here


   function getInputFiledValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
   }

   function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;}


   function getInputValueById(id){
    const inputValue2 = document.getElementById(id).value;
    const inputNumber2 = parseFloat(inputValue2);
    return inputNumber2;
   }

   function getTextValueById(id){
    const textValue2 = document.getElementById(id).innerText;
    const textNumber2 = parseFloat(textValue2);
    return textNumber2;}
