/* 
https://www.codewars.com/kata/52fba66badcd10859f00097e

Disemvowel Trolls:

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/
const disemvowel = (str) => {
    let newStr = "";
    for(let i = 0; i < str.length; i += 1){
        if(!(((str[i] === "a") || (str[i] === "e")) || ((str[i] === "i") || (str[i] === "o")) || ((str[i] === "u") || (str[i] === "A")) || ((str[i] === "E") || (str[i] === "I")) || ((str[i] === "O") || (str[i] === "U")))){
            newStr += str[i];
        };
    };
    return newStr;
};
console.log(disemvowel("hi how are you"));