/* 
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

Remove First and Last Character:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/
const removeChar = (str) => {
    if(str.length > 2){
        return str.slice(1,-1);
    }else{
        return "";
    };
};
console.log(removeChar("Remove First And Last"));
