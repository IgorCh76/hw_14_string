const palindromeInput = document.getElementById('palindrome_input');
const palindromeResSpan = document.getElementById('palindrome_res');
const reverseInput = document.getElementById('reverse_input');
const reverseResultSpan = document.getElementById('reverse_result');
const stringValueInput = document.getElementById('string_value');
const charValueInput = document.getElementById('character_value');
const resCalcSpan = document.getElementById('res_calc');


function checkPalindrome(){
    // get value from input to str and then call isPalindrome(str)
    let str = palindromeInput.value;
    palindromeResSpan.textContent =
        `"${str}" -> ${(isPalindrome(str)) ? 'TRUE' : 'FALSE'}`;
}

function isPalindrome(str){
    let strTrimmed = str.trim();
    return strTrimmed.toLowerCase() === reverseStr(str).toLowerCase();

}

function reverseString(){
    // get value from input to str and then call reverseString(str)
    let strRev = reverseInput.value;
    reverseResultSpan.textContent = `"${strRev}" -> "${reverseStr(strRev)}"`;
}

function reverseStr(str){
    let strTrimmed = str.trim();
    return strTrimmed.split('').reverse().join('');
}

function getCount(){
    // get value from input to str and c and then  countChar(str,c)
    let strVal = stringValueInput.value;
    let charVal = charValueInput.value;
    resCalcSpan.textContent = `${countChar(strVal, charVal)}`;
}

function countChar(str,c){
    let strArr = str.split('');
    let count = 0;
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === c){
            count++;
        }
    }
    return count;
}